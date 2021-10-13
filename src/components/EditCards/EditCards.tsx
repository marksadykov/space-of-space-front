import * as React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';

const EditCards: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="id" reference="cards">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="header" />
        <TextInput source="body" />
        <TextInput source="url" />
      </SimpleForm>
    </Edit>
  );
};

export default EditCards;
