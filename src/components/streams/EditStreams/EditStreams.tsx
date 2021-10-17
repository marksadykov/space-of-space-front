import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditStreams: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="launch" />
        <TextInput source="details" />
        <TextInput source="youtube" />
      </SimpleForm>
    </Edit>
  );
};

export default EditStreams;
