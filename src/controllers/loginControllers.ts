import { Request, Response } from "express";
import { conn } from '../config/config';
class loginControllers {
    async auth(req: Request, res: Response){
        const { name, password } = req.body;
        
    }
}

export { loginControllers }