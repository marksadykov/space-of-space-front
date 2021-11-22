import * as React from 'react';
import {
  Create,
  SimpleForm,
  BooleanInput,
  TextInput,
  NumberInput,
} from 'react-admin';

const CreateArmodels: React.FC = ({ ...props }: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput source="ar_category_id" />
        <TextInput source="name" />
        <TextInput source="image_url" />
        <NumberInput source="radius_ratio" />
        <NumberInput source="orbit_ratio" />
        <NumberInput source="orbit_speed" />
        <NumberInput source="self_speed" />
        <BooleanInput source="is_satellite" />
        <TextInput source="parent" />
        <TextInput source="diffuse" />
        <TextInput source="emission" />
        <TextInput source="normal" />
        <TextInput source="specular" />
        <BooleanInput source="not_rounded" />
        <TextInput source="file_extension" />
        <NumberInput source="init_scale" />
      </SimpleForm>
    </Create>
  );
};

export default CreateArmodels;
