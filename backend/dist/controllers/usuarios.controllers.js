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
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.createUser = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
// Controlador para crear un nuevo usuario
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield usuarios_schema_1.UserSchema.create(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al crear el usuario.' });
    }
});
exports.createUser = createUser;
// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield usuarios_schema_1.UserSchema.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al obtener los usuarios.' });
    }
});
exports.getAllUsers = getAllUsers;
// Controlador para actualizar un usuario
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = yield usuarios_schema_1.UserSchema.findByIdAndUpdate(userId, updateData, { new: true } // Devuelve el usuario actualizado en la respuesta
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al actualizar el usuario.' });
    }
});
exports.updateUser = updateUser;
// Controlador para eliminar un usuario
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const deletedUser = yield usuarios_schema_1.UserSchema.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.status(204).send(); // 204 No Content, ya que no hay contenido que devolver después de eliminar
    }
    catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error al eliminar el usuario.' });
    }
});
exports.deleteUser = deleteUser;
