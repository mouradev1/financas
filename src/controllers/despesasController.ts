import { Request, Response } from 'express';
import { conn } from '../config/config';

class despesasController {
    async createDespesa(req: Request, res: Response) {
        const { id_categoria, id_usuario, valor, descricao } = req.body;
        const data = new Date();
        try {
            const despesa = await conn.financa.create({
                data: {
                    id_categoria,
                    id_usuario,
                    valor,
                    status: false,
                    despesa_descricao: descricao,
                    data_despesa: data
                }
            })
            if (despesa) {
                res.status(201).send({ status: "Despesa criada com sucesso" })
            }
        }
        catch (e) {
            console.log(e)
            res.status(500).json({ status: "Algo deu errado" })
        }
    }
    async getDespesas(req: Request, res: Response) {
        const despesas = await conn.financa.findMany()
        if (despesas) {
            res.status(200).json(despesas)
        }
    }
    async getDespesa(req: Request, res: Response) {
        const { id_despesa } = req.body;
        const despesa = await conn.financa.findFirst({
            where: {
                id: id_despesa
            }
        })
        if (despesa) {
            res.status(200).send(despesa)
        }
    }
    async updateDespesa(req: Request, res: Response) {
        const { id_despesa } = req.body;
        const data = new Date();
        const dataFormatada = data.toLocaleDateString();
        const despesa = await conn.financa.update({
            where: {
                id: id_despesa
            },
            data: {
                status: true,
            }
        })
        if (despesa) {
            res.status(200).send({ status: "Despesa atualizada com sucesso" })
        }
    }

}

export { despesasController }