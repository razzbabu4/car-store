import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await OrderServices.createOrderIntoDB(orderData);
        res.status(200).json({
            message: 'Order created successfully',
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

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.getOrdersFromDB();
        if (result.length !== 0) {
            res.status(200).json({
                message: 'Orders retrieved successfully',
                status: true,
                data: result,
            });
        } else {
            res.status(404).json({
                message: "Orders not found",
                success: false,
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

const getTotalRevenue = async (req: Request, res: Response) => {
    try {
        const result = await OrderServices.getTotalRevenueFromOrders();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: {
                totalRevenue: result[0].totalRevenue,
            },
        });
    } catch (error) {
        res.status(404).json({
            message: 'No orders found',
            status: false,
            error: error,
            data: {
                totalRevenue: 0,
            },
        });
    }
};

export const OrderController = {
    createOrder,
    getAllOrders,
    getTotalRevenue,
};
