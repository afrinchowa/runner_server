import { z } from 'zod';

export const bicycleValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().min(0, 'Price must be at least 0'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric']),
  description: z.string().optional(),
  quantity: z.number().min(0, 'Quantity must be at least 0'),
  inStock: z.boolean().default(true),
  isDeleted: z.boolean().default(false),
});

export default bicycleValidationSchema;
