import * as React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  TextField,
} from 'react-admin';

const EditNews: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="id" reference="cards">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="id" />
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
