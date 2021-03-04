import {Request, Response} from 'express'
import {getCustomRepository} from 'typeorm';

import UserRepository from '../repositories/UserRepository';

class UserController {

  async create(request: Request, response: Response){
    try{
        const {nome, email, senha, tipo_usuario} = request.body;

        if(tipo_usuario !== 'admin' && tipo_usuario !== 'user'){
          return response.status(400).json({message: 'Erro! Tipo de usuário invalido'});
        }

        const userRepository = getCustomRepository(UserRepository);

        const findUserWithSameEmail = await userRepository.findOne({email});

        if(findUserWithSameEmail){
          return response.status(400).json({message: 'Já existe um úsuario com esse email'});
        }

        const user =  userRepository.create({
          nome,
          email,
          senha,
          tipo_usuario
        });

        await userRepository.save(user);
        return response.json(user);




    }catch(error){
      return response.status(400).json(error);
    }
  }

  async index(request: Request, response:Response){
    try{
      const userRepository = getCustomRepository(UserRepository);
      const users = await userRepository.find();
      return response.json(users)
    }catch(error){
      return response.status(400).json({message: error.message})
    }
  }

}

export default new UserController();
