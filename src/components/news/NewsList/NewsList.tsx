import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  BooleanField,
  DateField,
} from 'react-admin';

const NewsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <TextField source="newsSite" />
        <TextField source="summary" />
        <TextField source="title" />
        <TextField source="url" />
        <DateField source="publishedAt" />
        <DateField source="updatedAt" />
        <TextField source="imageUrl" />
        <BooleanField source="featured" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default NewsList;
