import * as React from 'react';
import {
  Admin,
  Resource,
  fetchUtils,
  GetListParams,
  GetOneParams,
} from 'react-admin';
import CardsList from '../CardsList';
import EditCards from '../EditCards';
import StreamsList from '../StreamsList';
import EditStreams from '../EditStreams';
import NewsList from '../NewsList';
import EditNews from '../EditNews';
import simpleRestProvider from 'ra-data-simple-rest';
// import { mockDataProvider } from '../mockDataProvider';
import { apiUrl } from '../config';

const httpClient = fetchUtils.fetchJson;
const simpleDataProvider = simpleRestProvider(apiUrl);

const myGetList = (resource: string, params: GetListParams) => {
  const url = `${apiUrl}/${resource}`;

  return httpClient(url).then(({ headers, json }) => {
    return {
      data: json.Content,
      total: json.Content.length,
    };
  });
};

const myGetOne = (resource: string, params: GetOneParams) => {
  const url = `${apiUrl}/${resource}/${params.id}`;

  return httpClient(url).then(({ headers, json }) => {
    return {
      data: json.Content,
    };
  });
};

const myDataProvider = {
  getList: myGetList,
  getOne: myGetOne,
  getMany: simpleDataProvider.getMany,
  getManyReference: simpleDataProvider.getManyReference,
  create: simpleDataProvider.create,
  update: simpleDataProvider.update,
  updateMany: simpleDataProvider.updateMany,
  delete: simpleDataProvider.delete,
  deleteMany: simpleDataProvider.deleteMany,
};

const AdminPanel: React.FC = () => {
  return (
    <Admin dataProvider={myDataProvider}>
      <Resource name="cards" list={CardsList} edit={EditCards} />
      <Resource name="streams" list={StreamsList} edit={EditStreams} />
      <Resource name="news" list={NewsList} edit={EditNews} />
    </Admin>
  );
};

export default AdminPanel;
