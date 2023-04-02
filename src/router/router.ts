import { Router, Request, Response } from 'express';
import { loginControllers } from '../controllers/loginControllers';
import { UsersControllers } from '../controllers/usersControllers';
import { cartegoriaController } from '../controllers/cartegoriaController';
import { despesasController } from '../controllers/despesasController';
const user = new UsersControllers();
const auth = new loginControllers();
const categoria = new cartegoriaController();
const despesa = new despesasController();
const router: Router = Router();

router.post('/despesa', despesa.createDespesa)
router.get('/despesa', despesa.getDespesas)
router.post('/categoria', categoria.createCategoria)
router.get('/categoria', categoria.getCategorias)

router.post('/user', user.createUser)
router.post('/auth', auth.auth);
export { router }