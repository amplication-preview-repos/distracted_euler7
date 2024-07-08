import { Work as TWork } from "../api/work/Work";

export const WORK_TITLE_FIELD = "title";

export const WorkTitle = (record: TWork): string => {
  return record.title?.toString() || String(record.id);
};
