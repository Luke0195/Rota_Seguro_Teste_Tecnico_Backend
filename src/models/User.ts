import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
@Entity('users')
class User{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha:string;

  @Column()
  tipo_usuario:string;


  constructor(){
    if(!this.id){
      this.id =uuid();
    }

  }

}


export default User;
