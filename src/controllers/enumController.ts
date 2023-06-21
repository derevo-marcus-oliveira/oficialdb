import { Request, Response } from "express";
import { prisma } from "../prismaClient";



export class SalvarEnum {
    async handle(request: Request, response: Response) {

        const { tipo, descricao } = request.body;

        try {
            
            const produto = await prisma.enuns.create({
                data: {
                    tipo,
                    descricao
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

export class AlterarEnum {
    async handle(request: Request, response: Response) {

        const { id, descricao } = request.body;
        
        try {
            
            const produto = await prisma.enuns.update({
                where : {
                    id: parseInt(id)
                },
                data : {
                    descricao
                }
            })

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}

export class BuscarUnicoEnum {
    async handle(request: Request, response: Response) {

        const { id } = request.params;
        console.log(id);
        
        try {
            
            const produto = await prisma.enuns.findMany({
                where: {
                    id: parseInt(id)
                }
            })

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}

export class BuscarTodosEnum {
    async handle(request: Request, response: Response) {

        const { tipo, descricao } = request.body;

        try {
            
            const produto = await prisma.enuns.findMany({
                where: {
                    tipo,
                    descricao
                }
            })

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}

export class ExcluirTodosEnum {
    async handle(request: Request, response: Response) {

        try {
            
            const produto = await prisma.enuns.deleteMany({})

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}

export class ExcluirEnum {
    async handle(request: Request, response: Response) {

        const { id } = request.body;
        
        try {
            
            const produto = await prisma.enuns.deleteMany({
                where : {
                    id: parseInt(id)
                }
            })

            return response.json(produto);
        }
        catch (error) {
            console.error(error);
        }
    }
}
