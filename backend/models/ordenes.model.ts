import mongoose from 'mongoose';



export interface OrdenM {
  _id?: mongoose.Types.ObjectId;
  noOrden: number;
  usuario: string;
  factura: Array<Factura>
 
}

export interface Factura{
  _id?: mongoose.Types.ObjectId; 
  descripcionProd: string;
  cantidadProd: number;
  valorProd: number;
  
}