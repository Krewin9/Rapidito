import mongoose from "mongoose";
import { Empresa, Producto } from "./empresa.model";


const schema = new mongoose.Schema<Empresa>({
 
    nombreEmpresa: String,
    imagen: String,
    producto: Array<Producto>
});

export const empresaSchema = mongoose.model('empresas',schema);