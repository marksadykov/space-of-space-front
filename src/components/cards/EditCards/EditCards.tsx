import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditCards: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="header" />
        <TextInput source="body" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default EditCards;
