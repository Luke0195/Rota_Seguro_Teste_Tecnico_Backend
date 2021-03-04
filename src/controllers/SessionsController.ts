import {Request, Response} from 'express';
import {getCustomRepository} from 'typeorm';
import  authConfig from '../config/auth'

import {sign} from 'jsonwebtoken'
import { compare} from 'bcryptjs'
import UserRepository  from '../repositories/UserRepository';



class SessionController{

  async store(request: Request, response:Response){
    const { email, senha } = request.body;
    const userRepository = getCustomRepository(UserRepository);

    if(!email || !senha){
      return response.status(401).json({message: 'Error to authenticate with Email/Senha'});
    }

    const user = await userRepository.findOne({email});

    if(!user){
      return response.status(401).json({message: 'Error to authenticate with Email'});
    }

    const matchPassword = await compare(senha, user.senha);

    if(!matchPassword){
      return response.status(401).json({message: 'Error to authenticate with Password'})
    }

    const {id} = user;
    const token = sign({},  authConfig.auth.jwt , {
      subject: id,
      expiresIn: authConfig.auth.expiresIn
    })

    return response.status(200).json({token, user})


  }
}


export default  new SessionController();
