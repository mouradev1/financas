import { Request, Response } from "express";
import { conn } from '../config/config';
import bcrypt from 'bcrypt';
class UsersControllers {
    async createUser(req: Request, res: Response) {
        const { name, password, nivel } = req.body;
        const newPass = await bcrypt.hash(password, 8);
        try {
            const exist = await conn.usuario.findFirst({
                where: {
                    name
                }
            })
            if (exist) {
                return res.status(400).send({ status: "Usuário já existe" })
            }
            const user = conn.usuario.create({
                data: {
                    name,
                    password: newPass,
                    nivel
                }
            })
            if (await user) {
                res.status(201).send({ status: "Usuário criado com sucesso" })
            }
        } catch (e) {
            res.status(500).json({ status: "Algo deu errado" })
        }
    }
}

export { UsersControllers }