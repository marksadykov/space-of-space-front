import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
} from 'react-admin';

const EditNews: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="imageUrl" />
        <TextInput source="newsSite" />
        <TextInput source="summary" />
        <TextInput source="title" />
        <DateInput source="publishedAt" />
        <DateInput source="updatedAt" />
        <TextInput source="url" />
        <BooleanInput source="featured" />
      </SimpleForm>
    </Edit>
  );
};

export default EditNews;
