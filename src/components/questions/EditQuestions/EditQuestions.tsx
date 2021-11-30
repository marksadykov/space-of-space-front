import * as React from 'react';
import {
  AutocompleteInput,
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
} from 'react-admin';

const EditQuestions: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <AutocompleteInput
          source="category_id"
          choices={[
            { id: '1', name: 'planets' },
            { id: '2', name: 'astronauts' },
            { id: '3', name: 'solar system' },
          ]}
        />
        <TextInput source="variants" />
        <TextInput source="correct" />
      </SimpleForm>
    </Edit>
  );
};

export default EditQuestions;
