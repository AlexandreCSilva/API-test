import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { userValidateSchema } from '../schemas/user-schema.ts';
import { authPost } from '../controllers/authentication-controller.ts';

const authRouter = Router();

authRouter.post('/sign-in', validateBody(userValidateSchema), authPost);

export { authRouter };