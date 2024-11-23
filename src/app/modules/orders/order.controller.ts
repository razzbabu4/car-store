import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await OrderServices.createOrderIntoDB(orderData);
        res.status(200).json({
            message: "Order created successfully",
            status: true,
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

export const OrderController = {
    createOrder
}