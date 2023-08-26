import {Request, Response} from 'express';
import { categoriaSchema } from '../models/categorias.schema';



// Controlador para crear una nueva categoría
export const createCategoria = async (req: Request, res: Response) => {
  try {
    const categoriaData = req.body; 

    const nuevaCategoria = await categoriaSchema.create(categoriaData);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al crear la categoría.' });
  }
};

// Controlador para obtener todas las categorías
export const getAllCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await categoriaSchema.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al obtener las categorías.' });
  }
};

// Controlador para actualizar una categoría
export const updateCategoria = async (req: Request, res: Response) => {
  try {
    const categoriaId = req.params.id; 
     const updateData = req.body;

    const updatedCategoria = await categoriaSchema.findByIdAndUpdate(
      categoriaId,
      updateData,
      { new: true } // Devuelve la categoría actualizada en la respuesta
    );

    if (!updatedCategoria) {
      return res.status(404).json({ error: 'Categoría no encontrada.' });
    }

    res.status(200).json(updatedCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al actualizar la categoría.' });
  }
};

// Controlador para eliminar una categoría
export const deleteCategoria = async (req: Request, res: Response) => {
  try {
    const categoriaId = req.params.id; 
    const deletedCategoria = await categoriaSchema.findByIdAndDelete(categoriaId);

    if (!deletedCategoria) {
      return res.status(404).json({ error: 'Categoría no encontrada.' });
    }

    res.status(204).send(); // 204 No Content, ya que no hay contenido que devolver después de eliminar
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al eliminar la categoría.' });
  }
};

