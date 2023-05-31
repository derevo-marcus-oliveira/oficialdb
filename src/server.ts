import express from 'express';
import cors from 'cors';

import { router } from './router';
import { Salvar, Buscar, BuscarComentario } from './controllers/PerifericoController';
import { SalvarEnum, BuscarEnum } from './controllers/enumController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


// Enum //
// Adicionar
const adicionarEnum = new SalvarEnum();
router.post("/AdicionarEnum", adicionarEnum.handle)

// Buscar
const buscarEnum = new BuscarEnum();
router.get("/BuscarEnum", buscarEnum.handle)



// Periferico //
// Adicionar
const adicionar = new Salvar();
router.post("/Adicionar", adicionar.handle)

// Buscar
const buscar = new Buscar();
router.get("/Buscar", buscar.handle)


// Buscar
const buscarComentario = new BuscarComentario();
router.get("/BuscarComentario", buscarComentario.handle)



app.listen(4003, () => console.log("server is running on PORT 4003"))