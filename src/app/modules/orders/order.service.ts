import { CarModel } from "../car/car.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (orderData: TOrder): Promise<TOrder> => {

    const carData = await CarModel.findById(orderData.car);

    if (carData === null) {
        throw new Error("Car is not exist")
    }
    if (carData.quantity < orderData.quantity) {
        throw new Error("Stock out");
    }

    orderData.totalPrice = carData.price * orderData.quantity;

    await CarModel.findByIdAndUpdate(orderData.car, {
        $inc: { quantity: -orderData.quantity },
        $set: { inStock: carData.quantity - orderData.quantity > 0 },
    });

    const result = await OrderModel.create(orderData)
    return result;
}



export const OrderServices = {
    createOrderIntoDB
}