import { WorkWhereUniqueInput } from "../work/WorkWhereUniqueInput";

export type TimeEntryUpdateInput = {
  date?: Date | null;
  hoursWorked?: number | null;
  work?: WorkWhereUniqueInput | null;
};
