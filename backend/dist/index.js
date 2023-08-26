"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarios_routers_1 = __importDefault(require("./routes/usuarios.routers"));
const empresas_routers_1 = __importDefault(require("./routes/empresas.routers"));
const categorias_routers_1 = __importDefault(require("./routes/categorias.routers"));
const database_1 = require("./utils/database");
const db = new database_1.Database();
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/users', usuarios_routers_1.default);
app.use('/categorias', categorias_routers_1.default);
app.use('/empresas', empresas_routers_1.default);
app.get("/pruebas", (req, res) => {
    res.send("Servidor Backend Rapidito");
    res.end();
});
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto: ${PORT}`);
});
