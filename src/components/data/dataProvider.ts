import simpleRestProvider from 'ra-data-simple-rest';
import { apiUrl } from '../config';
import { getList, getOne } from './methods';

const simpleDataProvider = simpleRestProvider(apiUrl);

export const dataProvider = {
  getList: getList,
  getOne: getOne,
  getMany: simpleDataProvider.getMany,
  getManyReference: simpleDataProvider.getManyReference,
  create: simpleDataProvider.create,
  update: simpleDataProvider.update,
  updateMany: simpleDataProvider.updateMany,
  delete: simpleDataProvider.delete,
  deleteMany: simpleDataProvider.deleteMany,
};
