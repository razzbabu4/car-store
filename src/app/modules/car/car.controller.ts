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

export const CarController = {
    cerateCar
}