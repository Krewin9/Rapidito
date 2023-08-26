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
exports.getAllUsers = exports.createUser = void 0;
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
// Otros controladores (actualización, eliminación, etc.) seguirían un patrón similar
