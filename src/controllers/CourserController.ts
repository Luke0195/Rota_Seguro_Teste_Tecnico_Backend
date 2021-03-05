import {Request, Response} from 'express';

class CourseController{

  index(request:Request, response:Response){
    return response.json({message: 'Rota de Cursos'});
  }
}

export default new CourseController();
