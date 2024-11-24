import { z } from 'zod';

// Define the Car Zod schema
const CarSchema = z.object({
  brand: z.string().min(1, { message: 'Brand is required' }),
  model: z.string().min(1, { message: 'Model is required' }),
  year: z
    .number()
    .int()
    .min(1886, { message: 'Year must be 1886 or later' }) // Cars were invented in 1886
    .max(new Date().getFullYear(), { message: 'Year cannot be in the future' }),
  price: z.number().positive({ message: 'Price must be greater than 0' }), // Price must be positive
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    message: 'Category must be one of Sedan, SUV, Truck, Coupe, Convertible',
  }), // Predefined category values
  description: z.string().min(1, { message: 'Description is required' }),
  quantity: z.number().int().min(0, { message: 'Quantity cannot be negative' }),
  inStock: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

// Export the schema
export const CarZodSchema = CarSchema;
