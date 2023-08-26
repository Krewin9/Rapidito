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
exports.deleteEmpresa = exports.updateEmpresa = exports.getAllEmpresas = exports.createEmpresa = void 0;
const empresas_schema_1 = require("../models/empresas.schema");
// Controlador para crear una nueva empresa
const createEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresaData = req.body;
        const nuevaEmpresa = yield empresas_schema_1.empresaSchema.create(empresaData);
        res.status(201).json(nuevaEmpresa);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al crear la empresa.' });
    }
});
exports.createEmpresa = createEmpresa;
// Controlador para obtener todas las empresas
const getAllEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresas = yield empresas_schema_1.empresaSchema.find();
        res.status(200).json(empresas);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las empresas.' });
    }
});
exports.getAllEmpresas = getAllEmpresas;
// Controlador para actualizar una empresa
const updateEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresaId = req.params.id;
        const updateData = req.body;
        const updatedEmpresa = yield empresas_schema_1.empresaSchema.findByIdAndUpdate(empresaId, updateData, { new: true });
        if (!updatedEmpresa) {
            return res.status(404).json({ error: 'Empresa no encontrada.' });
        }
        res.status(200).json(updatedEmpresa);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al actualizar la empresa.' });
    }
});
exports.updateEmpresa = updateEmpresa;
// Controlador para eliminar una empresa
const deleteEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empresaId = req.params.id;
        const deletedEmpresa = yield empresas_schema_1.empresaSchema.findByIdAndDelete(empresaId);
        if (!deletedEmpresa) {
            return res.status(404).json({ error: 'Empresa no encontrada.' });
        }
        res.status(204).send(); // 204 No Content, ya que no hay contenido que devolver después de eliminar
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al eliminar la empresa.' });
    }
});
exports.deleteEmpresa = deleteEmpresa;
