import mongoose from 'mongoose';

export interface Empresa{
  _id?: mongoose.Types.ObjectId;
    nombreEmpresa: string;
    imagen: string;
    producto: Array<Producto>;
    
  }

export interface Producto{
  _id?: mongoose.Types.ObjectId;
    nombreProducto: string;
    descripcion: string;
    precio: number;
    
  } 