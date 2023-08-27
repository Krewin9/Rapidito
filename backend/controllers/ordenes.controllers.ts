import {Request, Response} from 'express';
import { OrdenesMSchema } from '../models/ordenes.schema';


// Controlador para crear una nueva orden
export const createOrden = async (req: Request, res: Response) => {
  try {
    const ordenData = req.body; 
    const nuevaOrden = await OrdenesMSchema.create(ordenData);
    res.status(201).json(nuevaOrden);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al crear la orden.' });
  }
};

// Controlador para obtener todas las órdenes
export const getAllOrdenes = async (req: Request, res: Response) => {
  try {
    const ordenes = await OrdenesMSchema.find();
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al obtener las órdenes.' });
  }
};
