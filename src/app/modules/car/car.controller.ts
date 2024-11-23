import { Request, Response } from "express";
import { CarServices } from "./car.service";

const cerateCar = async (req: Request, res: Response) => {
    try {
        const { car } = req.body;
        const result = await CarServices.createCarIntoDB(car);
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

export const CarController = {
    cerateCar,
    getAllCar
}