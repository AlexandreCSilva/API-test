import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { operationCreateValidateSchema, operationUpdateValidateSchema } from '../schemas/operation-schema.ts';
import { operationPost, operationRead, operationUpdate } from '../controllers/operation-controller.ts';
import { authenticateToken } from '../middlewares/authentication-middleware.ts';
import { validateOperation } from '../middlewares/validate-operation.ts';

const operationRouter = Router();

operationRouter.all('/*', authenticateToken)
operationRouter.post('/', validateBody(operationCreateValidateSchema), operationPost);
operationRouter.get('/', validateOperation, operationRead);
operationRouter.put('/', validateBody(operationUpdateValidateSchema), operationUpdate);

export { operationRouter };