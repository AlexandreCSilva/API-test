import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { vehicleCreateValidateSchema } from '../schemas/vehicles-schema.ts';
import { authenticateToken } from '../middlewares/authentication-middleware.ts';
import { vehiclePost, vehicleRead } from '../controllers/vehicle-controller.ts';

const vehicleRouter = Router();

vehicleRouter.all('/*', authenticateToken)
vehicleRouter.post('/', validateBody(vehicleCreateValidateSchema), vehiclePost);

export { vehicleRouter };