import z from 'zod';
import bicycleValidationSchema from '../bicycle/bicycle.validation';

export const orderValidationSchema = z.object({
    userId: z.string().min(1, 'User ID is required'),
    products: z.array(
      z.object({
        bicycle: bicycleValidationSchema,
        quantity: z.number().min(1, 'Quantity must be at least 1'),
      })
    ),
    totalPrice: z.number().min(0, 'Total price must be at least 0'),
    status: z.enum(['Pending', 'Shipped', 'Delivered', 'Cancelled']),
    createdAt: z.date(),
    updatedAt: z.date(),
  });
  
  export type OrderValidationType = z.infer<typeof orderValidationSchema>;