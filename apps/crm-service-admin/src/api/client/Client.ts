import { Order } from "../order/Order";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  phone: string | null;
  orders?: Array<Order>;
};
