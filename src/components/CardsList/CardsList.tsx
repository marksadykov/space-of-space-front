import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const CardsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="Header" />
        <TextField source="Body" />
        <TextField source="Url" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default CardsList;
