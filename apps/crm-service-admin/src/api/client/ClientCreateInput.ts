import { OrderCreateNestedManyWithoutClientsInput } from "./OrderCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  orders?: OrderCreateNestedManyWithoutClientsInput;
};
