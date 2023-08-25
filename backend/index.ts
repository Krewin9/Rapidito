import express, { Request, Response, Express } from 'express';
import cors from 'cors';

const app:Express = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());


app.get("/pruebas", (req:Request, res: Response) => {
  res.send("Servidor Backend Rapidito");
  res.end();
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto: ${PORT}`);
})
