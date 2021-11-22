import * as React from 'react';
import { SimpleForm, TextInput, Create } from 'react-admin';

const CreateQuestions: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="variants" />
        <TextInput source="correct" />
        <TextInput source="enemy_answer" />
      </SimpleForm>
    </Create>
  );
};

export default CreateQuestions;
