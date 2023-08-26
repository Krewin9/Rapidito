"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresas_controllers_1 = require("../controllers/empresas.controllers");
const router = express_1.default.Router();
// http://localhost:3000/empresas/crearempresa
router.post('/crearempresa', empresas_controllers_1.createEmpresa);
// http://localhost:3000/empresas/empresas
router.get('/empresas', empresas_controllers_1.getAllEmpresas);
// http://localhost:3000/empresas/crearempresa
router.put('/actualizarempresa', empresas_controllers_1.updateEmpresa);
// http://localhost:3000/empresas/borrarempresas
router.delete('/borrarempresas', empresas_controllers_1.deleteEmpresa);
exports.default = router;
