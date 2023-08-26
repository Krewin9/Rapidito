"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categorias_controllers_1 = require("../controllers/categorias.controllers");
const router = express_1.default.Router();
// http://localhost:3000/categorias/crearCategoria
router.post('/crearCategoria', categorias_controllers_1.createCategoria);
// http://localhost:3000/categorias/categorias
router.get('/categorias', categorias_controllers_1.getAllCategorias);
// http://localhost:3000/categorias/actualizarcategoria
router.put('/actualizarcategoria', categorias_controllers_1.updateCategoria);
// http://localhost:3000/categorias/borrarcategoria
router.delete('/borrarcategorias', categorias_controllers_1.deleteCategoria);
exports.default = router;
