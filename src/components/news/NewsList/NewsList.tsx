import * as React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const NewsList: React.FC = ({ ...props }: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="image_url" />
        <TextField source="news_site" />
        <TextField source="published_at" />
        <TextField source="summary" />
        <TextField source="title" />
        <TextField source="updated_at" />
        <TextField source="url" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default NewsList;
