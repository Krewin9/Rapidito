"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controllers_1 = require("../controllers/usuarios.controllers");
const router = express_1.default.Router();
// (Controlador de usuarios) login
// http://localhost:3000/users/crearusuario
router.post('/crearusuario', usuarios_controllers_1.createUser);
// (Controlador de usuarios) Obtener los detalles de un usuario
// http://localhost:3000/users/usuarios
router.get('/usuarios', usuarios_controllers_1.getAllUsers);
exports.default = router;
