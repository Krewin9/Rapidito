import express from 'express';
import {createUser,getAllUsers } from '../controllers/usuarios.controllers';

const router = express.Router();

// (Controlador de usuarios) login
// http://localhost:3000/users/crearusuario
router.post('/crearusuario', createUser);

// (Controlador de usuarios) Obtener los detalles de un usuario
// http://localhost:3000/users/usuarios
router.get('/usuarios', getAllUsers);


export default router;

