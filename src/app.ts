import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRouter } from './app/modules/car/car.routes';
import { OrderRouter } from './app/modules/orders/order.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/cars', CarRouter);
app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Car Store Server is running');
});

export default app;
