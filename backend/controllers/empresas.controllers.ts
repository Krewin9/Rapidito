import {Request, Response} from 'express';
import { empresaSchema } from '../models/empresas.schema';

// Controlador para crear una nueva empresa
export const createEmpresa = async (req: Request, res: Response) => {
  try {
    const empresaData = req.body; 
    const nuevaEmpresa = await empresaSchema.create(empresaData);
    res.status(201).json(nuevaEmpresa);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al crear la empresa.' });
  }
};

// Controlador para obtener todas las empresas
export const getAllEmpresas = async (req: Request, res: Response) => {
  try {
    const empresas = await empresaSchema.find();
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al obtener las empresas.' });
  }
};

// Controlador para actualizar una empresa
export const updateEmpresa = async (req: Request, res: Response) => {
  try {
    const empresaId = req.params.id; 
    const updateData = req.body;

    const updatedEmpresa = await empresaSchema.findByIdAndUpdate(
      empresaId,
      updateData,
      { new: true }
    );

    if (!updatedEmpresa) {
      return res.status(404).json({ error: 'Empresa no encontrada.' });
    }

    res.status(200).json(updatedEmpresa);
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al actualizar la empresa.' });
  }
};

// Controlador para eliminar una empresa
export const deleteEmpresa = async (req: Request, res: Response) => {
  try {
    const empresaId = req.params.id; 
    const deletedEmpresa = await empresaSchema.findByIdAndDelete(empresaId);

    if (!deletedEmpresa) {
      return res.status(404).json({ error: 'Empresa no encontrada.' });
    }

    res.status(204).send(); // 204 No Content, ya que no hay contenido que devolver después de eliminar
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al eliminar la empresa.' });
  }
};
