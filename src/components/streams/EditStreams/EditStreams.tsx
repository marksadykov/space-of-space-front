import * as React from 'react';
import { DateTimeInput, Edit, SimpleForm, TextInput } from 'react-admin';

const EditStreams: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="category" />
        <TextInput source="title" />
        <TextInput source="youtube_id" />
        <TextInput source="description" />
        <DateTimeInput source="published_at" />
      </SimpleForm>
    </Edit>
  );
};

export default EditStreams;
