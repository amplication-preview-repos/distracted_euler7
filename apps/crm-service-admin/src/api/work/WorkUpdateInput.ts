import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { TimeEntryUpdateManyWithoutWorksInput } from "./TimeEntryUpdateManyWithoutWorksInput";

export type WorkUpdateInput = {
  title?: string | null;
  description?: string | null;
  assignedTo?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  order?: OrderWhereUniqueInput | null;
  timeEntries?: TimeEntryUpdateManyWithoutWorksInput;
};
