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

// Controlador para actualizar un usuario
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; 
    const updateData = req.body;

    const updatedUser = await UserSchema.findByIdAndUpdate(
      userId,
      updateData,
      { new: true } // Devuelve el usuario actualizado en la respuesta
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al actualizar el usuario.' });
  }
};

// Controlador para eliminar un usuario
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id; 
    const deletedUser = await UserSchema.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    res.status(204).send(); // 204 No Content, ya que no hay contenido que devolver después de eliminar
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al eliminar el usuario.' });
  }
};
