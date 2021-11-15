import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditArcategory: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="image_url" />
      </SimpleForm>
    </Edit>
  );
};

export default EditArcategory;
