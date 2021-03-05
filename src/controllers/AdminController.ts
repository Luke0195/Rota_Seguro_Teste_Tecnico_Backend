import {Request, Response} from 'express';

class AdminController{

  index(request:Request, response:Response){

    return  response.status(200).json({message: 'Welcome Admin'});
  }

}


export default new AdminController();
