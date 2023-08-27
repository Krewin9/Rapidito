import mongoose from "mongoose";
import { OrdenM, Factura} from "./ordenes.model";


const schema = new mongoose.Schema<OrdenM>({
  noOrden: Number,
  usuario: String,
  factura:Array<Factura>
 
});

export const OrdenesMSchema = mongoose.model('ordenes',schema);