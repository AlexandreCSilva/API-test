import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { operationValidateSchema } from '../schemas/operation-schema.ts';
import { operationPost } from '../controllers/operation-controller.ts';

const operationRouter = Router();

operationRouter.post('/', validateBody(operationValidateSchema), operationPost);

export { operationRouter };