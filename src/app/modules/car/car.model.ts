import { Schema, model } from 'mongoose';
import { TCar } from './car.interface';

const carSchema = new Schema<TCar>({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: {
            values: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"]
        },
        required: true
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true, default: true },
},
    {
        timestamps: true
    }
);

export const CarModel = model<TCar>('Car', carSchema)