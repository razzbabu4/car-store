import { Request, Response } from 'express';
import { CarServices } from './car.service';
// import { CarZodSchema } from './car.validation';

// create car data
const cerateCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;

    // validation with zod
    // const zodParseData = CarZodSchema.parse(carData);

    const result = await CarServices.createCarIntoDB(carData);
    res.status(200).json({
      message: 'Car created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

// get all car data
const getAllCar = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await CarServices.getAllCarFromDB(searchTerm as string);
    if (result.length === 0) {
      res.status(404).json({
        message: `No data matches your searchTerm: ${searchTerm}`,
        success: false,
      });
    } else {
      res.status(200).json({
        message: 'Cars retrieved successfully',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

// get single car data
const getSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.getSingleCarFromDB(carId);
    if (result === null) {
      res.status(404).json({
        message: `No data found`,
        success: false,
        data: result,
      });
    } else {
      res.status(200).json({
        message: 'Car retrieved successfully',
        status: true,
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

// update the car data
const updateSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const data = req.body;
    const result = await CarServices.updateSingleIntoDB(carId, data);
    res.status(200).json({
      message: 'Car updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

// delete the car data
const deleteSingleCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    await CarServices.deleteSingleFromDB(carId);
    res.status(200).json({
      message: 'Car deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

export const CarController = {
  cerateCar,
  getAllCar,
  getSingleCar,
  updateSingleCar,
  deleteSingleCar,
};
