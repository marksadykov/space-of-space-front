import * as React from 'react';
import {
  SimpleForm,
  TextInput,
  Create,
  AutocompleteInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
} from 'react-admin';

const CreateQuestions: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <AutocompleteInput
          source="category_id"
          choices={[
            { id: 1, name: 'planets' },
            { id: 2, name: 'astronauts' },
            { id: 3, name: 'solar system' },
          ]}
        />
        <ArrayInput source="variants">
          <SimpleFormIterator>
            <TextInput source="" />
          </SimpleFormIterator>
        </ArrayInput>
        <NumberInput source="correct" />
      </SimpleForm>
    </Create>
  );
};

export default CreateQuestions;
