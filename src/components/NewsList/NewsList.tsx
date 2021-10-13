import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const NewsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="imageUrl" />
        <TextField source="newsSite" />
        <TextField source="publishedAt" />
        <TextField source="summary" />
        <TextField source="title" />
        <TextField source="updatedAt" />
        <TextField source="url" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default NewsList;
