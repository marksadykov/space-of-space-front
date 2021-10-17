import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditNews: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="imageUrl" />
        <TextInput source="newsSite" />
        <TextInput source="publishedAt" />
        <TextInput source="summary" />
        <TextInput source="title" />
        <TextInput source="updatedAt" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default EditNews;
