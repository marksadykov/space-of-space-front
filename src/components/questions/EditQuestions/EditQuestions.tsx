import * as React from 'react';
import {
  AutocompleteInput,
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
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
    </Edit>
  );
};

export default EditQuestions;
