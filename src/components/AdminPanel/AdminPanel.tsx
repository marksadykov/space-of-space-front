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
import CreateNews from '../news/CreateNews';
import ArmodelsList from '../armodels/ArmodelsList';
import CreateArmodels from '../armodels/CreateArmodels';
import { dataProvider } from '../data/dataProvider';
import EditArmodels from '../armodels/EditArmodels';
import ArcategoryList from '../arcategory/ArcategoryList';
import CreateArcategory from '../arcategory/CreateArcategory';
import EditArcategory from '../arcategory/EditArcategory';

const AdminPanel: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="stream"
        list={StreamsList}
        edit={EditStreams}
        create={CreateStreams}
      />
      {/*<Resource*/}
      {/*  name="cards"*/}
      {/*  list={ArcategoryList}*/}
      {/*  edit={EditArcategory}*/}
      {/*  create={CreateArcategory}*/}
      {/*/>*/}
      <Resource
        name="new"
        list={NewsList}
        create={CreateNews}
        edit={EditNews}
      />
      <Resource
        name="armodels"
        list={ArmodelsList}
        create={CreateArmodels}
        edit={EditArmodels}
      />
      <Resource
        name="arcategory"
        list={ArcategoryList}
        create={CreateArcategory}
        edit={EditArcategory}
      />
      <Resource name="users" list={UsersList} edit={EditUsers} />
    </Admin>
  );
};

export default AdminPanel;
