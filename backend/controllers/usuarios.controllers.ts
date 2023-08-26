import {Request, Response} from 'express';
import { UserSchema } from '../models/usuarios.schema';

// Controlador para crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body; 

    const newUser = await UserSchema.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al crear el usuario.' });
  }
};

// Controlador para obtener todos los usuarios
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al obtener los usuarios.' });
  }
};

// Otros controladores (actualización, eliminación, etc.) seguirían un patrón similar

