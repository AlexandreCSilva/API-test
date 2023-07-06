import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body.ts';
import { vehicleCreateValidateSchema, vehicleUpdateValidateSchema } from '../schemas/vehicles-schema.ts';
import { authenticateToken } from '../middlewares/authentication-middleware.ts';
import { vehiclePost, vehicleRead, vehicleUpdate } from '../controllers/vehicle-controller.ts';
import { validateVehicle } from '../middlewares/validate-vehicle.ts';

const vehicleRouter = Router();

vehicleRouter.all('/*', authenticateToken)
vehicleRouter.post('/', validateBody(vehicleCreateValidateSchema), vehiclePost);
vehicleRouter.get('/', validateVehicle, vehicleRead);
vehicleRouter.put('/', validateBody(vehicleUpdateValidateSchema), vehicleUpdate);

export { vehicleRouter };