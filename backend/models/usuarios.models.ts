import mongoose from 'mongoose';



export interface User {
  _id?: mongoose.Types.ObjectId;
  nombre: string;
  apellidos: string;
  ordenes: Array<orden>
 
}

export interface orden{
  
  nombreProducto: string;
  descripcion: string;
  precio: number;
  
}