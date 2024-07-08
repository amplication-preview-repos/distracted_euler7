import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { WorkWhereUniqueInput } from "../work/WorkWhereUniqueInput";

export type TimeEntryWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  hoursWorked?: FloatNullableFilter;
  work?: WorkWhereUniqueInput;
};
