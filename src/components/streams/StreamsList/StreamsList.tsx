import * as React from 'react';
import { List, Datagrid, TextField, EditButton, DateField } from 'react-admin';

const StreamsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <TextField source="category" />
        <TextField source="description" />
        <TextField source="title" />
        <TextField source="youtube_id" />
        <DateField source="published_at" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default StreamsList;
