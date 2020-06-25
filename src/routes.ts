 import {Router} from 'express';
import 'dotenv/config';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/users', UserController.store);

export default routes;