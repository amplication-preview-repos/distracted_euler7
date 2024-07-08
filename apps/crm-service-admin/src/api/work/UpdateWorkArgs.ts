import { WorkWhereUniqueInput } from "./WorkWhereUniqueInput";
import { WorkUpdateInput } from "./WorkUpdateInput";

export type UpdateWorkArgs = {
  where: WorkWhereUniqueInput;
  data: WorkUpdateInput;
};
