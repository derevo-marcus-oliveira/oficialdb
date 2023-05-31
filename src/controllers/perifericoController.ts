import { Request, Response } from "express";
import { prisma } from "../prismaClient";
import { create } from "domain";

export class Salvar {
    async handle(request: Request, response: Response) {

        const { tipo, nome, marca, modelo, especificacoes, avaliacoes, imagens } = request.body;

        try {
            
            const produto = await prisma.db_periferico.create({
                data: {
                    tipo : tipo,
                    nome : nome,
                    marca : marca,
                    modelo : modelo,
                    especificacoes : {
                        create: especificacoes
                    },
                    avaliacoes: {
                        create: avaliacoes
                    },
                    imagens : {
                        create: imagens
                    }
                },
                include : {
                    especificacoes : true,
                    avaliacoes: true,
                    imagens: true
                }
            })
            
            return response.json(produto);
        }
        catch (error) {
            console.error(error);
            return response.json(error);
        }
    }
}

export class Buscar {
    async handle(request: Request, response: Response) {

        const { id, tipo, nome, marca, modelo} = request.body;

        try {
            
            const produto = await prisma.db_periferico.findMany({
                where: {
                    id,
                    tipo,
                    nome,
                    marca,
                    modelo
                },
                include: {
                    especificacoes : true,                    
                    avaliacoes : true,
                    imagens : true,
                    commentarios : true
                }
            })

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}

export class BuscarComentario {
    async handle(request: Request, response: Response) {

        const { id_periferico} = request.body;

        try {
            
            const produto = await prisma.db_periferico_comentario.findMany({
                where: {
                    id_periferico
                }
            })

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}
