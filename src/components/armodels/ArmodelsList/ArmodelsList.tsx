import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  BooleanField,
} from 'react-admin';

const ArmodelsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props} pagination={null}>
      <Datagrid>
        <NumberField source="ar_category_id" />
        <TextField source="name" />
        <TextField source="image_url" />
        <NumberField source="radius_ratio" />
        <NumberField source="orbit_ratio" />
        <NumberField source="orbit_speed" />
        <NumberField source="self_speed" />
        <BooleanField source="is_satellite" />
        <TextField source="parent" />
        <TextField source="diffuse" />
        <TextField source="emission" />
        <TextField source="normal" />
        <TextField source="specular" />
        <BooleanField source="not_rounded" />
        <TextField source="file_extension" />
        <NumberField source="init_scale" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ArmodelsList;
