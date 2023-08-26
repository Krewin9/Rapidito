import mongoose from "mongoose";
import { Categoria} from "./categorias.model";
import { Empresa, Producto } from "./empresa.model";


const schema = new mongoose.Schema<Categoria>({
  nombreCategoria: String,
  descripcion: String,
  color: String,
  icono: String,
  empresas:Array<Empresa>
 
});

export const categoriaSchema = mongoose.model('categorias',schema);// enlace