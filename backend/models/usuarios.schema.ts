import mongoose from "mongoose";
import { User, orden } from "./usuarios.models";


const schema = new mongoose.Schema<User>({
  nombre: String,
  apellidos: String,
  ordenes:Array<orden>
 
});

export const UserSchema = mongoose.model('users',schema);// enlace