"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ExcluirTodos = exports.BuscarComentario = exports.BuscarTodos = exports.BuscarUnico = exports.Alterar = exports.Salvar = void 0;
var prismaClient_1 = require("../prismaClient");
var Salvar = /** @class */ (function () {
    function Salvar() {
    }
    Salvar.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, tipo, nome, marca, modelo, especificacoes, avaliacoes, imagens, produto, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, tipo = _a.tipo, nome = _a.nome, marca = _a.marca, modelo = _a.modelo, especificacoes = _a.especificacoes, avaliacoes = _a.avaliacoes, imagens = _a.imagens;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico.create({
                                data: {
                                    tipo: tipo,
                                    nome: nome,
                                    marca: marca,
                                    modelo: modelo,
                                    especificacoes: {
                                        create: especificacoes
                                    },
                                    avaliacoes: {
                                        create: avaliacoes
                                    },
                                    imagens: {
                                        create: imagens
                                    }
                                },
                                include: {
                                    especificacoes: true,
                                    avaliacoes: true,
                                    imagens: true
                                }
                            })];
                    case 2:
                        produto = _b.sent();
                        return [2 /*return*/, response.json(produto)];
                    case 3:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [2 /*return*/, response.json(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Salvar;
}());
exports.Salvar = Salvar;
var Alterar = /** @class */ (function () {
    function Alterar() {
    }
    Alterar.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, tipo, nome, marca, modelo, especificacoes, avaliacoes, imagens, produto, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, tipo = _a.tipo, nome = _a.nome, marca = _a.marca, modelo = _a.modelo, especificacoes = _a.especificacoes, avaliacoes = _a.avaliacoes, imagens = _a.imagens;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico["delete"]({
                                where: {
                                    id: parseInt(id)
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico.create({
                                data: {
                                    tipo: tipo,
                                    nome: nome,
                                    marca: marca,
                                    modelo: modelo,
                                    imagens: imagens,
                                    especificacoes: especificacoes,
                                    avaliacoes: avaliacoes
                                },
                                include: {
                                    imagens: true,
                                    especificacoes: true,
                                    avaliacoes: true
                                }
                            })];
                    case 3:
                        produto = _b.sent();
                        return [2 /*return*/, response.json(produto)];
                    case 4:
                        error_2 = _b.sent();
                        console.error(error_2);
                        return [2 /*return*/, response.json(error_2)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Alterar;
}());
exports.Alterar = Alterar;
var BuscarUnico = /** @class */ (function () {
    function BuscarUnico() {
    }
    BuscarUnico.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, produto, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico.findMany({
                                where: {
                                    id: parseInt(id)
                                },
                                include: {
                                    especificacoes: true,
                                    avaliacoes: true,
                                    imagens: true,
                                    commentarios: true
                                }
                            })];
                    case 2:
                        produto = _a.sent();
                        return [2 /*return*/, response.json(produto)];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BuscarUnico;
}());
exports.BuscarUnico = BuscarUnico;
var BuscarTodos = /** @class */ (function () {
    function BuscarTodos() {
    }
    BuscarTodos.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var produto, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico.findMany({
                                include: {
                                    especificacoes: true,
                                    avaliacoes: true,
                                    imagens: true,
                                    commentarios: true
                                }
                            })];
                    case 1:
                        produto = _a.sent();
                        return [2 /*return*/, response.json(produto)];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return BuscarTodos;
}());
exports.BuscarTodos = BuscarTodos;
var BuscarComentario = /** @class */ (function () {
    function BuscarComentario() {
    }
    BuscarComentario.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id_periferico, produto, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_periferico = request.body.id_periferico;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico_comentario.findMany({
                                where: {
                                    id_periferico: id_periferico
                                }
                            })];
                    case 2:
                        produto = _a.sent();
                        return [2 /*return*/, response.json(produto)];
                    case 3:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BuscarComentario;
}());
exports.BuscarComentario = BuscarComentario;
var ExcluirTodos = /** @class */ (function () {
    function ExcluirTodos() {
    }
    ExcluirTodos.prototype.handle = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, produto, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.body.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, prismaClient_1.prisma.db_periferico["delete"]({
                                where: {
                                    id: id
                                }
                            })];
                    case 2:
                        produto = _a.sent();
                        return [2 /*return*/, response.json(produto)];
                    case 3:
                        error_6 = _a.sent();
                        console.error(error_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ExcluirTodos;
}());
exports.ExcluirTodos = ExcluirTodos;
