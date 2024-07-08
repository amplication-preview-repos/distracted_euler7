import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WorkTitle } from "../work/WorkTitle";

export const TimeEntryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="hoursWorked" source="hoursWorked" />
        <ReferenceInput source="work.id" reference="Work" label="Work">
          <SelectInput optionText={WorkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
