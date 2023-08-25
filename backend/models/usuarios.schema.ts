import mongoose from "mongoose";
import { User } from "./usuarios.models";


const schema = new mongoose.Schema<User>({
  email: String,
  password: String,
 
});

export const UserSchema = mongoose.model('users',schema);// enlace