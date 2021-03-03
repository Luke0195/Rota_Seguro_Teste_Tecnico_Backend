import express from 'express';

const app = express();

app.get('/', (request, response) =>{
  return response.json({message: 'Projeto Prático'});
})

app.listen(3331, () =>{
  console.log('Server is runing on port http://localhost:3331');
})