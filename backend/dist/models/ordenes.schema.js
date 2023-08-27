"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesMSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    noOrden: Number,
    usuario: String,
    factura: (Array)
});
exports.OrdenesMSchema = mongoose_1.default.model('ordenes', schema); // enlace
