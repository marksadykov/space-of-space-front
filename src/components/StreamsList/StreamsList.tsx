import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const StreamsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="launch" />
        <TextField source="details" />
        <TextField source="youtube" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default StreamsList;
