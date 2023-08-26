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
exports.deleteCategoria = exports.updateCategoria = exports.getAllCategorias = exports.createCategoria = void 0;
const categorias_schema_1 = require("../models/categorias.schema");
// Controlador para crear una nueva categoría
const createCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaData = req.body;
        const nuevaCategoria = yield categorias_schema_1.categoriaSchema.create(categoriaData);
        res.status(201).json(nuevaCategoria);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al crear la categoría.' });
    }
});
exports.createCategoria = createCategoria;
// Controlador para obtener todas las categorías
const getAllCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield categorias_schema_1.categoriaSchema.find();
        res.status(200).json(categorias);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las categorías.' });
    }
});
exports.getAllCategorias = getAllCategorias;
// Controlador para actualizar una categoría
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaId = req.params.id;
        const updateData = req.body;
        const updatedCategoria = yield categorias_schema_1.categoriaSchema.findByIdAndUpdate(categoriaId, updateData, { new: true } // Devuelve la categoría actualizada en la respuesta
        );
        if (!updatedCategoria) {
            return res.status(404).json({ error: 'Categoría no encontrada.' });
        }
        res.status(200).json(updatedCategoria);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al actualizar la categoría.' });
    }
});
exports.updateCategoria = updateCategoria;
// Controlador para eliminar una categoría
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaId = req.params.id;
        const deletedCategoria = yield categorias_schema_1.categoriaSchema.findByIdAndDelete(categoriaId);
        if (!deletedCategoria) {
            return res.status(404).json({ error: 'Categoría no encontrada.' });
        }
        res.status(204).send(); // 204 No Content, ya que no hay contenido que devolver después de eliminar
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al eliminar la categoría.' });
    }
});
exports.deleteCategoria = deleteCategoria;
