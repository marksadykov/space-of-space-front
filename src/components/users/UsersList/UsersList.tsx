import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const UsersList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <TextField source="username" />
        <TextField source="avatar" />
        <TextField source="get_education" />
        <TextField source="get_news" />
        <TextField source="get_stream" />
        <TextField source="language" />
        <TextField source="percent" />
        <TextField source="rating" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default UsersList;
