import mongoose from 'mongoose';
import { Empresa, Producto } from "./empresa.model";


export interface Categoria {
  _id?: mongoose.Types.ObjectId;
  nombreCategoria: string
  descripcion: String,
  color: String,
  icono: String,
  empresas:Array<Empresa>
 
}
