"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var router_1 = require("./router");
var PerifericoController_1 = require("./controllers/PerifericoController");
var enumController_1 = require("./controllers/enumController");
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use(router_1.router);
// Enum //
// Adicionar
var adicionarEnum = new enumController_1.SalvarEnum();
router_1.router.post("/AdicionarEnum", adicionarEnum.handle);
// alterar
var alterarEnum = new enumController_1.AlterarEnum();
router_1.router.post("/AlterarEnum", alterarEnum.handle);
// Buscar
var buscarTodosEnum = new enumController_1.BuscarTodosEnum();
router_1.router.get("/BuscarEnum", buscarTodosEnum.handle);
// Buscar
var buscarUnicoEnum = new enumController_1.BuscarUnicoEnum();
router_1.router.get("/BuscarEnum:id", buscarUnicoEnum.handle);
// excluir todos
var excluirTodosEnum = new enumController_1.ExcluirTodosEnum();
router_1.router["delete"]("/ExcluirTodosEnum", excluirTodosEnum.handle);
// excluir 
var excluirEnum = new enumController_1.ExcluirEnum();
router_1.router["delete"]("/ExcluirEnum", excluirEnum.handle);
// Periferico //
// Adicionar
var adicionar = new PerifericoController_1.Salvar();
router_1.router.post("/Adicionar", adicionar.handle);
// Alterar
var alterar = new PerifericoController_1.Alterar();
router_1.router.post("/Alterar", alterar.handle);
// Buscar
var buscarUnico = new PerifericoController_1.BuscarUnico();
router_1.router.get("/Buscar:id", buscarUnico.handle);
// Buscar
var buscarTodos = new PerifericoController_1.BuscarTodos();
router_1.router.get("/Buscar", buscarTodos.handle);
// Buscar
var excluirTodos = new PerifericoController_1.ExcluirTodos();
router_1.router["delete"]("/Excluir", excluirTodos.handle);
// Buscar
var buscarComentario = new PerifericoController_1.BuscarComentario();
router_1.router.get("/BuscarComentario", buscarComentario.handle);
app.listen(4003, function () { return console.log("server is running on PORT 4003"); });
