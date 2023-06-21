import express from 'express';
import cors from 'cors';

import { router } from './router';
import { Salvar, BuscarUnico, BuscarTodos, BuscarComentario, ExcluirTodos } from './controllers/PerifericoController';
import { SalvarEnum, BuscarTodosEnum, BuscarUnicoEnum, ExcluirTodosEnum, ExcluirEnum, AlterarEnum } from './controllers/enumController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


// Enum //
// Adicionar
const adicionarEnum = new SalvarEnum();
router.post("/AdicionarEnum", adicionarEnum.handle)

// alterar
const alterarEnum = new AlterarEnum();
router.post("/AlterarEnum", alterarEnum.handle)

// Buscar
const buscarTodosEnum = new BuscarTodosEnum();
router.get("/BuscarEnum", buscarTodosEnum.handle)

// Buscar
const buscarUnicoEnum = new BuscarUnicoEnum();
router.get("/BuscarEnum:id", buscarUnicoEnum.handle)

// excluir todos
const excluirTodosEnum = new ExcluirTodosEnum();
router.delete("/ExcluirTodosEnum", excluirTodosEnum.handle)

// excluir 
const excluirEnum = new ExcluirEnum();
router.delete("/ExcluirEnum", excluirEnum.handle)





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
const excluirTodos = new ExcluirTodos();
router.delete("/Excluir", excluirTodos.handle)


// Buscar
const buscarComentario = new BuscarComentario();
router.get("/BuscarComentario", buscarComentario.handle)



app.listen(4003, () => console.log("server is running on PORT 4003"))