import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WORK_TITLE_FIELD } from "../work/WorkTitle";

export const TimeEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="hoursWorked" source="hoursWorked" />
        <ReferenceField label="Work" source="work.id" reference="Work">
          <TextField source={WORK_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
