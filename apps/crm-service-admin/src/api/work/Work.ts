import { Order } from "../order/Order";
import { TimeEntry } from "../timeEntry/TimeEntry";

export type Work = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  assignedTo: string | null;
  startTime: Date | null;
  endTime: Date | null;
  order?: Order | null;
  timeEntries?: Array<TimeEntry>;
};
