import { NextFunction, Request, Response } from 'express';

import {verify} from 'jsonwebtoken';
import {getCustomRepository} from 'typeorm';
import UserRepository from '../repositories/UserRepository';
import authConfig from '../config/auth';
import User from '../models/User';


interface TokenPayLoad{
  iat: number;
  sub: string;
  exp:number;
}

export default  async function(request: Request, response: Response, next:NextFunction){

  const { authorization } = request.headers;

  if(!authorization){
    return response.status(401).json({message:'Missing JWT'});
  }
  try{
    const [,token] = authorization.split(' ');
    const { jwt } = authConfig.auth;
    const decoded = verify(token,jwt);

    const { sub} = decoded as TokenPayLoad;
    request.user ={
      id: sub
    }

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(request.user.id);

    if(user?.tipo_usuario !== 'admin'){
      return response.status(401).json({message:`Only admins are able to acess this route`});
    }

    return next();

  }catch(error){
    return response.status(400).json({ message:'Missing JWT'});
  }

}
