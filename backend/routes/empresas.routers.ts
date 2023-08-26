import express from 'express';
import {createEmpresa,getAllEmpresas,updateEmpresa,deleteEmpresa } from '../controllers/empresas.controllers';

const router = express.Router();


// http://localhost:3000/empresas/crearempresa
router.post('/crearempresa', createEmpresa);


// http://localhost:3000/empresas/empresas
router.get('/empresas', getAllEmpresas);

// http://localhost:3000/empresas/crearempresa
router.put('/actualizarempresa', updateEmpresa);


// http://localhost:3000/empresas/borrarempresas
router.delete('/borrarempresas', deleteEmpresa);


export default router;