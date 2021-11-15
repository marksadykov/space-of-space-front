import simpleRestProvider from 'ra-data-simple-rest';
import { apiUrl } from '../config';
import {
  getListMethod,
  getOneMethod,
  updateMethod,
  createMethod,
  deleteMethod,
  getManyReferenceMethod,
  updateManyMethod,
  deleteManyMethod,
} from './methods';

const simpleDataProvider = simpleRestProvider(apiUrl);

export const dataProvider = {
  getList: getListMethod,
  getOne: getOneMethod,
  create: createMethod,
  update: updateMethod,
  delete: deleteMethod,
  getMany: getManyReferenceMethod,
  updateMany: updateManyMethod,
  deleteMany: deleteManyMethod,

  getManyReference: simpleDataProvider.getManyReference,
};
