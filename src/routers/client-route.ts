import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { clientValidateSchema } from '../schemas/client-schema.ts';
import { clientDelete, clientGet, clientPost, clientUpdate } from '../controllers/client-controller.ts';
import { validateCNPJ } from '../middlewares/validate-cnpj.ts';
import { authenticateToken } from '../middlewares/authentication-middleware.ts';

const clientRouter = Router();

clientRouter.all('/*', authenticateToken)
clientRouter.post('/', validateBody(clientValidateSchema), clientPost);
clientRouter.get('/', validateCNPJ, clientGet);
clientRouter.put('/', validateBody(clientValidateSchema), clientUpdate);
clientRouter.delete('/', validateCNPJ, clientDelete);

export { clientRouter };