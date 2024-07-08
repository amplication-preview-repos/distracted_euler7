import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { TimeEntryCreateNestedManyWithoutWorksInput } from "./TimeEntryCreateNestedManyWithoutWorksInput";

export type WorkCreateInput = {
  title?: string | null;
  description?: string | null;
  assignedTo?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  order?: OrderWhereUniqueInput | null;
  timeEntries?: TimeEntryCreateNestedManyWithoutWorksInput;
};
