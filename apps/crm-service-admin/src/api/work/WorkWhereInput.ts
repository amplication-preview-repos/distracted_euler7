import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { TimeEntryListRelationFilter } from "../timeEntry/TimeEntryListRelationFilter";

export type WorkWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  order?: OrderWhereUniqueInput;
  timeEntries?: TimeEntryListRelationFilter;
};
