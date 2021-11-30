import * as React from 'react';
import { SimpleForm, TextInput, Create, AutocompleteInput } from 'react-admin';

const CreateQuestions: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
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
    </Create>
  );
};

export default CreateQuestions;
