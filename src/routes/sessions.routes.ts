import { Router } from 'express';


const sessionsRoutes = Router();


sessionsRoutes.post('/sessions', (request, response) =>{
  return response.json({message: 'Sessions Routes'});
})

export default sessionsRoutes;
