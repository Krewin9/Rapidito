import mongoose from "mongoose";
import { mongodb } from "./mongokey";


export class Database {
    
    constructor() {
      
      mongoose.connect(mongodb.URI)
      .then(()=>{
        console.log('Conectado a la Base de Datos josekrewin01');
      }).catch((error) => {
        console.error('Error al conectarse', error);
      });
    }
  }
