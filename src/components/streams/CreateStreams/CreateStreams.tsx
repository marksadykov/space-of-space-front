import * as React from 'react';
import { SimpleForm, TextInput, Create, DateTimeInput } from 'react-admin';

const CreateStreams: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="category" />
        <TextInput source="title" />
        <TextInput source="youtube_id" />
        <TextInput source="description" />
        <DateTimeInput source="published_at" />
      </SimpleForm>
    </Create>
  );
};

export default CreateStreams;
