import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  status?: SortOrder;
  clientId?: SortOrder;
};
