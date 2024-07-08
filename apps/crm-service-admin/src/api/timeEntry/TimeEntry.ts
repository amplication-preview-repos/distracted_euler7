import { Work } from "../work/Work";

export type TimeEntry = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  hoursWorked: number | null;
  work?: Work | null;
};
