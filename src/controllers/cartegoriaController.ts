import { Request, Response } from "express";
import { conn } from '../config/config';

class cartegoriaController {
    async createCategoria(req: Request, res: Response) {
        const { categoria } = req.body;
        try {
            const exist  = await conn.categoria.findFirst({
                where: {
                    name: categoria
                }
            })
            if (exist) {
                return res.status(400).send({ status: "Categoria já existe" })
            }
            const cat = await conn.categoria.create({
                data: {
                    name: categoria
                }
            })
            if (cat) {
                res.status(201).send({ status: "Categoria criada com sucesso" })
            }
        }
        catch (e) {
            res.status(500).json({ status: "Algo deu errado" })
        }
    }
    async getCategorias(req: Request, res: Response) {
        const categorias = await conn.categoria.findMany()
        if (categorias) {
            res.status(200).json(categorias)
        }
    }
}

export { cartegoriaController }