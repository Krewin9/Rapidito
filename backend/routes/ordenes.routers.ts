import express from 'express';
import { createOrden, getAllOrdenes } from '../controllers/ordenes.controllers';

const router = express.Router();


// http://localhost:3000/ordenes/crearorden
router.post('/crearorden', createOrden);


// http://localhost:3000/ordenes/ordenes
router.get('/ordenes', getAllOrdenes);


export default router;