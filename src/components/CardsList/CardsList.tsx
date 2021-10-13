import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const CardsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="header" />
        <TextField source="body" />
        <TextField source="url" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default CardsList;
