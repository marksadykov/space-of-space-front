import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import CardsList from '../cards/CardsList';
import EditCards from '../cards/EditCards';
import CreateCards from '../cards/CreateCards';
import StreamsList from '../streams/StreamsList';
import EditStreams from '../streams/EditStreams';
import NewsList from '../news/NewsList';
import EditNews from '../news/EditNews';
import CreateStreams from '../streams/CreateStreams';
import UsersList from '../users/UsersList';
import EditUsers from '../users/EditUsers';
import { dataProvider } from '../data/dataProvider';

const AdminPanel: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="cards"
        list={CardsList}
        edit={EditCards}
        create={CreateCards}
      />
      <Resource
        name="streams"
        list={StreamsList}
        edit={EditStreams}
        create={CreateStreams}
      />
      <Resource name="users" list={UsersList} edit={EditUsers} />
      <Resource name="news" list={NewsList} edit={EditNews} />
    </Admin>
  );
};

export default AdminPanel;
