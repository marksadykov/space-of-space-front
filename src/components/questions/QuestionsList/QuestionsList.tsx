import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  FunctionField,
} from 'react-admin';

const categories = [
  { id: 1, name: 'planets' },
  { id: 2, name: 'astronauts' },
  { id: 3, name: 'solar system' },
];

const QuestionsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <NumberField source="category_id" />
        <FunctionField
          source="category_id"
          label="category"
          render={(record: any) => {
            const item = categories.find(i => i.id === record.category_id);
            return item?.name || '';
          }}
        />
        <TextField source="name" />
        <NumberField source="correct" />
        <NumberField source="enemy_answer" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default QuestionsList;
