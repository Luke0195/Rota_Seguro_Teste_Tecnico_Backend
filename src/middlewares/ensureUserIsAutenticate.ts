import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken'

interface TokenPayload{
  iat: number;
  sub: string;
  exp: number;
}

import authConfig from '../config/auth'
export default function (request:Request, response: Response,next:NextFunction){

  const {authorization} = request.headers;

  if(!authorization){
    return response.status(401).json({message: 'Missing JWT, login is required'});
  }

  try{
    const [, token] = authorization.split(' ');
    const {jwt} =  authConfig.auth;
    const decoded = verify(token, jwt);

    const { sub } = decoded as TokenPayload;

    request.user ={
      id: sub
    }

    return next();
  }catch(error){
    return response.status(401).json({message: 'Invalid JWT token'});
  }
}
