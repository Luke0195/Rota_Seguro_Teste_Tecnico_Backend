import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';

const app = express();
app.use(express.json());
app.use(routes)


app.listen(3331, () =>{
  console.log('Server is runing on port http://localhost:3331');
})
