import {
  CreateParams,
  DeleteManyParams,
  DeleteParams,
  fetchUtils,
  GetListParams,
  GetManyParams,
  GetOneParams,
  HttpError,
  UpdateManyParams,
  UpdateParams,
} from 'react-admin';
import { apiUrl } from '../config';
import { stringify } from 'query-string';

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers['Access-Token'] = localStorage.getItem('Access-Token') || '';
  return fetchUtils.fetchJson(url, options);
};

// const httpClient = fetchUtils.fetchJson;

// const resourcePort: Record<string, string> = {
//   cards: localStorage.getItem('proxy') || '',
//   stream: localStorage.getItem('proxy') || '',
//   users: ':28081',
//   new: localStorage.getItem('proxy') || '',
//   arcategory: ':28084',
//   armodels: ':28084',
//   question: ':28083',
// };

enum Source {
  cards = 'cards',
  stream = 'stream',
  users = 'users',
  new = 'new',
  arcategory = 'arcategory',
  armodels = 'armodels',
  question = 'question',
}

const resourcePort = (): Record<Source, string> => ({
  cards: localStorage.getItem('proxy') || '',
  stream: localStorage.getItem('proxy') || '',
  users: localStorage.getItem('users') || '',
  new: localStorage.getItem('proxy') || '',
  arcategory: localStorage.getItem('ar') || '',
  armodels: localStorage.getItem('ar') || '',
  question: localStorage.getItem('question') || '',
});

const getUrlWithPort = (url: string, resource: Source): string => {
  const ports = resourcePort();
  const port = ports[resource];
  return `${url}${port}`;
};

const getUrl = (resource: string): string => {
  const urlWithPort = getUrlWithPort(apiUrl, (<any>Source)[resource]);
  return `${urlWithPort}/${resource}`;
};

export const getListMethod = (resource: string, params: GetListParams) => {
  const url = getUrl(resource);
  return httpClient(url).then(
    ({ json }) => {
      return {
        data: json.Content,
        total: json.Content.length,
      };
    },
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const getOneMethod = (resource: string, params: GetOneParams) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const url = `${apiUrl}${port}/${resource}/${params.id}`;
  return httpClient(url).then(
    ({ json }) => ({ data: json.Content }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const updateMethod = (resource: string, params: UpdateParams) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const url = `${apiUrl}${port}/${resource}/${params.data.id}`;
  return httpClient(url, {
    method: 'PUT',
    body: JSON.stringify(params.data),
  }).then(
    ({ json }) => ({ data: json.Content }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const createMethod = (resource: string, params: CreateParams) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const url = `${apiUrl}${port}/${resource}`;
  return httpClient(url, {
    method: 'POST',
    body: JSON.stringify(params.data),
  }).then(
    ({ json }) => ({ data: json.Content }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const deleteMethod = (resource: string, params: DeleteParams) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const url = `${apiUrl}${port}/${resource}/${params.id}`;
  return httpClient(url, {
    method: 'DELETE',
  }).then(
    ({ json }) => ({ data: json.Content }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const getManyReferenceMethod = (
  resource: string,
  params: GetManyParams
) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const query = {
    filter: JSON.stringify({ ids: params.ids }),
  };
  const url = `${apiUrl}${port}/${resource}?${stringify(query)}`;
  return httpClient(url).then(
    ({ json }) => ({ data: json }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const updateManyMethod = (
  resource: string,
  params: UpdateManyParams
) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const query = {
    filter: JSON.stringify({ id: params.ids }),
  };
  return httpClient(`${apiUrl}${port}/${resource}?${stringify(query)}`, {
    method: 'PUT',
    body: JSON.stringify(params.data),
  }).then(
    ({ json }) => ({ data: json }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const deleteManyMethod = (
  resource: string,
  params: DeleteManyParams
) => {
  const ports = resourcePort();
  // @ts-ignore
  const port = ports[resource];
  const query = {
    filter: JSON.stringify({ id: params.ids }),
  };
  return httpClient(`${apiUrl}${port}/${resource}?${stringify(query)}`, {
    method: 'DELETE',
  }).then(
    ({ json }) => ({ data: json }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};
