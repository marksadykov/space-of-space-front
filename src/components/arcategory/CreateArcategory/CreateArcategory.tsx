import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CreateArcategory: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="image_url" />
      </SimpleForm>
    </Create>
  );
};

export default CreateArcategory;
