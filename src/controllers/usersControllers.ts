import { Request, Response } from "express";
import { conn } from '../config/config';

class UsersControllers {
    async createUser(req: Request, res: Response) {
        const { name, password, nivel } = req.body;
        try {
            const user = conn.users.create({
                data: {
                    name,
                    password,
                    nivel
                }
            })
            if(await user){
                
            }
        } catch (e) {
            res.status(500).json({ status: "Algo deu errado" })
        }
    }
}

export { UsersControllers }