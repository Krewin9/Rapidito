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
exports.obtenerUsuario = exports.login = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_schema_1.UserSchema.findOne({ email: req.body.email, password: req.body.password }, { password: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.login = login;
// (Controlador de usuarios) Obtener los detalles de un usuario
const obtenerUsuario = (req, res) => {
    res.send("Obtenner usuario está funcionando " + req.params.id);
    res.end();
};
exports.obtenerUsuario = obtenerUsuario;
