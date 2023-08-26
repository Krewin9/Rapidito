"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombreEmpresa: String,
    imagen: String,
    producto: (Array)
});
exports.empresaSchema = mongoose_1.default.model('empresas', schema); // enlace 
