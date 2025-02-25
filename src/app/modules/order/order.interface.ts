import { IBicycle } from "../bicycle/bicycle.interface";

export interface IOrder {
    userId: string;
    products: {
      bicycle: IBicycle;
      quantity: number;
    }[];
    totalPrice: number;
    status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  }
  