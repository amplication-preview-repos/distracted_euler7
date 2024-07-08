import { OrderUpdateManyWithoutClientsInput } from "./OrderUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  orders?: OrderUpdateManyWithoutClientsInput;
};
