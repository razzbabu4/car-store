import { Request, Response } from "express";
import { CarServices } from "./car.service";

const cerateCar = async (req: Request, res: Response) => {
    try {
        const carData = req.body;
        const result = await CarServices.createCarIntoDB(carData);
        res.status(200).json({
            message: "Car created successfully",
            success: true,
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: "Validation failed",
            success: false,
            error: error
        })
    }
}

const getAllCar = async (req: Request, res: Response) => {
    try {
        const { searchTerm } = req.query;
        const result = await CarServices.getAllCarFromDB(searchTerm as string);
        if (result.length === 0) {
            res.status(404).json({
                message: `No data matches your searchTerm: ${searchTerm}`,
                success: false,
            })
        }
        else {
            res.status(200).json({
                message: "Cars retrieved successfully",
                status: true,
                data: result
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: "Validation failed",
            success: false,
            error: error
        })
    }
}

const getSingleCar = async (req: Request, res: Response) => {
    const { carId } = req.params;
    const result = await CarServices.getSingleCarFromDB(carId)
    res.status(200).json({
        message: "Car retrieved successfully",
        status: true,
        data: result
    })
}

export const CarController = {
    cerateCar,
    getAllCar,
    getSingleCar
}