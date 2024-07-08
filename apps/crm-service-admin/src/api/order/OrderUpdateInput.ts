import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { WorkUpdateManyWithoutOrdersInput } from "./WorkUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  description?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  status?: "Option1" | null;
  client?: ClientWhereUniqueInput | null;
  works?: WorkUpdateManyWithoutOrdersInput;
};
