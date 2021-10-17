import * as React from 'react';
import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const EditUsers: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextField source="username" />
        <TextField source="avatar" />
        <TextField source="get_education" />
        <TextField source="get_news" />
        <TextField source="get_stream" />
        <TextField source="language" />
        <TextField source="percent" />
        <TextField source="rating" />
      </SimpleForm>
    </Edit>
  );
};

export default EditUsers;
