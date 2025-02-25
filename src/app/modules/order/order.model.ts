import mongoose, { Schema } from 'mongoose';



const orderSchema: Schema = new Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    bicycleId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Bicycle', 
      required: true 
    },
    quantity: { 
      type: Number, 
      required: true, 
      min: 1 
    },
    totalPrice: { 
      type: Number, 
      required: true, 
      min: 0 
    },
    status: { 
      type: String, 
      enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], 
      default: 'Pending' 
    },
    orderDate: { 
      type: Date, 
      default: Date.now 
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model('Order', orderSchema);
