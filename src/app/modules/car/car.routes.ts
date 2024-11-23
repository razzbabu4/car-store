import express from 'express'
import { CarController } from './car.controller';

const router = express.Router();

router.post('/', CarController.cerateCar);
router.get('/:carId', CarController.getSingleCar);
router.get('/', CarController.getAllCar);

export const CarRouter = router;