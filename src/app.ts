import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRouter } from './app/modules/car/car.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/cars', CarRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Car Store Server is running');
});

export default app;
