import { Client } from "../client/Client";
import { Work } from "../work/Work";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  startDate: Date | null;
  endDate: Date | null;
  status?: "Option1" | null;
  client?: Client | null;
  works?: Array<Work>;
};
