import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { userValidateSchema } from '../schemas/user-schema.ts';
import { userPost } from '../controllers/user-controller.ts';

const userRouter = Router();

userRouter.post('/', validateBody(userValidateSchema), userPost);

export { userRouter };