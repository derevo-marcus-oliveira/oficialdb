import express from 'express';
import cors from 'cors';

import { router } from './router';
import { Salvar, BuscarUnico, BuscarTodos, BuscarComentario } from './controllers/PerifericoController';
import { SalvarEnum, BuscarTodosEnum, BuscarUnicoEnum } from './controllers/enumController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


// Enum //
// Adicionar
const adicionarEnum = new SalvarEnum();
router.post("/AdicionarEnum", adicionarEnum.handle)

// Buscar
const buscarTodosEnum = new BuscarUnicoEnum();
router.get("/BuscarEnum", buscarTodosEnum.handle)

// Buscar
const buscarUnicoEnum = new BuscarTodosEnum();
router.get("/BuscarEnum", buscarUnicoEnum.handle)



// Periferico //
// Adicionar
const adicionar = new Salvar();
router.post("/Adicionar", adicionar.handle)

// Buscar
const buscarUnico = new BuscarUnico();
router.get("/Buscar:id", buscarUnico.handle)

// Buscar
const buscarTodos = new BuscarTodos();
router.get("/Buscar", buscarTodos.handle)


// Buscar
const buscarComentario = new BuscarComentario();
router.get("/BuscarComentario", buscarComentario.handle)



app.listen(4003, () => console.log("server is running on PORT 4003"))