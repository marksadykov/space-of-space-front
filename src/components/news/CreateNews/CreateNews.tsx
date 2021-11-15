import * as React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  BooleanInput,
  DateInput,
} from 'react-admin';

const CreateNews: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="imageUrl" />
        <TextInput source="newsSite" />
        <TextInput source="summary" />
        <TextInput source="title" />
        <DateInput source="publishedAt" />
        <DateInput source="updatedAt" />
        <TextInput source="url" />
        <BooleanInput source="featured" />
      </SimpleForm>
    </Create>
  );
};

export default CreateNews;
