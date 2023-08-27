import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import userRouter from './routes/usuarios.routers';
import empresasRouter from './routes/empresas.routers';
import categoriasRouter from './routes/categorias.routers';
import ordenesRouter from './routes/ordenes.routers';

import { Database } from './utils/database'; 


const db:Database = new Database()

const app:Express = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/categorias', categoriasRouter);
app.use('/empresas', empresasRouter);
app.use('/ordenes', ordenesRouter);


app.get("/pruebas", (req:Request, res: Response) => {
  res.send("Servidor Backend Rapidito");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto: ${PORT}`);
})
