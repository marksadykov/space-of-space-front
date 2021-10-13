import * as React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';

const EditStreams: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="id" reference="cards">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="launch" />
        <TextInput source="details" />
        <TextInput source="youtube" />
      </SimpleForm>
    </Edit>
  );
};

export default EditStreams;
