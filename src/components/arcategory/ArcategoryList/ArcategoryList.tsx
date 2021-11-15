import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  BooleanField,
} from 'react-admin';

const ArcategoryList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="image_url" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ArcategoryList;
