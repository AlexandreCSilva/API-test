import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { operationValidateSchema } from '../schemas/operation-schema.ts';
import { operationPost, operationRead } from '../controllers/operation-controller.ts';
import { authenticateToken } from '../middlewares/authentication-middleware.ts';
import { validateOperation } from '../middlewares/validate-operation.ts';

const operationRouter = Router();

operationRouter.all('/*', authenticateToken)
operationRouter.post('/', validateBody(operationValidateSchema), operationPost);
operationRouter.get('/', validateOperation, operationRead);

export { operationRouter };