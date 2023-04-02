import { Request, Response } from "express";
import { conn } from '../config/config';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
class loginControllers {
    async auth(req: Request, res: Response) {
        const { name, password } = req.body;
        const secret = process.env.SECRET as string;
        try {
            const user = await conn.usuario.findFirst({
                where: {
                    name,
                }
            })
            if (user) {
                const isValidation = await bcrypt.compare(password, user.password)
                if (!isValidation) {
                    return res.status(401).send({ status: "Senha ou usuario invalidos!!" })
                }
                const token = jsonwebtoken.sign({ id: user.id, usuario: user.name }, secret, { expiresIn: '1d' })
                if (token) {
                    return res.status(200).send({ status: "Usuário logado com sucesso", token })
                }
            }
        }
        catch (e) {
            return res.status(500).json({ status: "Algo deu errado" })
        }
    }
}
//
export { loginControllers }