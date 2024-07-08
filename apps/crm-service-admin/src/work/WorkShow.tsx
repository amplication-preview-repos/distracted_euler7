import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORK_TITLE_FIELD } from "./WorkTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const WorkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="assignedTo" source="assignedTo" />
        <TextField label="startTime" source="startTime" />
        <TextField label="endTime" source="endTime" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="TimeEntry"
          target="workId"
          label="TimeEntries"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
