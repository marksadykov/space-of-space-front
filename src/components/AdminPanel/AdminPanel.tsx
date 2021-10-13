import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import CardsList from '../CardsList';
import EditCards from '../EditCards';
import StreamsList from '../StreamsList';
import EditStreams from '../EditStreams';
import NewsList from '../NewsList';
import EditNews from '../EditNews';
import { dataProvider } from '../dataProvider';

const AdminPanel: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="cards" list={CardsList} edit={EditCards} />
      <Resource name="streams" list={StreamsList} edit={EditStreams} />
      <Resource name="news" list={NewsList} edit={EditNews} />
    </Admin>
  );
};

export default AdminPanel;
