import * as React from 'react';
import { SimpleForm, TextInput, Create } from 'react-admin';

const CreateStreams: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="launch" />
        <TextInput source="details" />
        <TextInput source="youtube" />
      </SimpleForm>
    </Create>
  );
};

export default CreateStreams;
