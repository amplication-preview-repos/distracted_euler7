import { SortOrder } from "../../util/SortOrder";

export type WorkOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  assignedTo?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  orderId?: SortOrder;
};
