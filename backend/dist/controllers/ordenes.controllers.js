"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdenes = exports.createOrden = void 0;
const ordenes_schema_1 = require("../models/ordenes.schema");
// Controlador para crear una nueva orden
const createOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordenData = req.body;
        const nuevaOrden = yield ordenes_schema_1.OrdenesMSchema.create(ordenData);
        res.status(201).json(nuevaOrden);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al crear la orden.' });
    }
});
exports.createOrden = createOrden;
// Controlador para obtener todas las órdenes
const getAllOrdenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordenes = yield ordenes_schema_1.OrdenesMSchema.find();
        res.status(200).json(ordenes);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las órdenes.' });
    }
});
exports.getAllOrdenes = getAllOrdenes;
