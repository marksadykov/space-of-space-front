import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CreateCards: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="header" />
        <TextInput source="body" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default CreateCards;
