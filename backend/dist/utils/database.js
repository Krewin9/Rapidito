"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongokey_1 = require("./mongokey");
class Database {
    constructor() {
        mongoose_1.default.connect(mongokey_1.mongodb.URI)
            .then(() => {
            console.log('Conectado a la Base de Datos josekrewin01');
        }).catch((error) => {
            console.error('Error al conectarse', error);
        });
    }
}
exports.Database = Database;
