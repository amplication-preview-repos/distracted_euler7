import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { WorkListRelationFilter } from "../work/WorkListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  status?: "Option1";
  client?: ClientWhereUniqueInput;
  works?: WorkListRelationFilter;
};
