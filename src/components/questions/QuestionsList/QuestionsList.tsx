import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const QuestionsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <TextField source="category_id" />
        <TextField source="name" />
        <TextField source="variants" />
        <TextField source="correct" />
        <TextField source="enemy_answer" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default QuestionsList;
