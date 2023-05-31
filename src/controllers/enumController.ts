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

export class BuscarEnum {
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
