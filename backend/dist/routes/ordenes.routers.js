"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordenes_controllers_1 = require("../controllers/ordenes.controllers");
const router = express_1.default.Router();
// http://localhost:3000/ordenes/crearorden
router.post('/crearorden', ordenes_controllers_1.createOrden);
// http://localhost:3000/ordenes/ordenes
router.get('/ordenes', ordenes_controllers_1.getAllOrdenes);
exports.default = router;
