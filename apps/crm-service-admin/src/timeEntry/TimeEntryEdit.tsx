import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { WorkTitle } from "../work/WorkTitle";

export const TimeEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="hoursWorked" source="hoursWorked" />
        <ReferenceInput source="work.id" reference="Work" label="Work">
          <SelectInput optionText={WorkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
