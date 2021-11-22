import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditQuestions: React.FC = ({ ...props }: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="variants" />
        <TextInput source="correct" />
        <TextInput source="enemy_answer" />
      </SimpleForm>
    </Edit>
  );
};

export default EditQuestions;
