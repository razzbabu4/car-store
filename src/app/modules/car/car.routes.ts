import express from 'express'
import { CarController } from './car.controller';

const router = express.Router();

router.post('/', CarController.cerateCar);

export const CarRouter = router;