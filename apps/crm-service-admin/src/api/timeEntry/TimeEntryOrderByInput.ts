import { SortOrder } from "../../util/SortOrder";

export type TimeEntryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  hoursWorked?: SortOrder;
  workId?: SortOrder;
};
