import { WorkWhereUniqueInput } from "../work/WorkWhereUniqueInput";

export type TimeEntryCreateInput = {
  date?: Date | null;
  hoursWorked?: number | null;
  work?: WorkWhereUniqueInput | null;
};
