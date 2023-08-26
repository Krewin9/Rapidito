import express from 'express';
import {createCategoria,getAllCategorias,updateCategoria,deleteCategoria } from '../controllers/categorias.controllers';

const router = express.Router();


// http://localhost:3000/categorias/crearCategoria
router.post('/crearCategoria', createCategoria);


// http://localhost:3000/categorias/categorias
router.get('/categorias', getAllCategorias);

// http://localhost:3000/categorias/actualizarcategoria
router.put('/actualizarcategoria', updateCategoria);


// http://localhost:3000/categorias/borrarcategoria
router.delete('/borrarcategorias', deleteCategoria);


export default router;