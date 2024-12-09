import { ObjectId } from 'mongoose';

export type TOrder = {
  email: string;
  car: ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
};
