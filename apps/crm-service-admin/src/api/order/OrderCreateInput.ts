import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { WorkCreateNestedManyWithoutOrdersInput } from "./WorkCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  description?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  status?: "Option1" | null;
  client?: ClientWhereUniqueInput | null;
  works?: WorkCreateNestedManyWithoutOrdersInput;
};
