import {
  fetchUtils,
  GetListParams,
  GetOneParams,
  CreateParams,
  UpdateParams,
  DeleteParams,
  GetManyParams,
  UpdateManyParams,
  DeleteManyParams,
  HttpError,
} from 'react-admin';
import { apiUrl } from '../config';
import { stringify } from 'query-string';

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const currentAccessToken = localStorage.getItem('Access-Token') || '';
  options.headers.set('Access-Token', currentAccessToken);
  return fetchUtils.fetchJson(url, options);
};

const resourcePort: Record<string, string> = {
  cards: ':28080',
  stream: ':28080',
  users: ':28081',
  new: ':28080',
  arcategory: ':28084',
  armodels: ':28084',
  question: ':28083',
};

const getUrlWithPort = (url: string, resource: string): string =>
  `${url}${resourcePort[resource]}`;

const getUrl = (resource: string): string => {
  const urlWithPort = getUrlWithPort(apiUrl, resource);
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
  const url = `${apiUrl}${resourcePort[resource]}/${resource}/${params.id}`;
  return httpClient(url).then(
    ({ json }) => ({ data: json.Content }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const updateMethod = (resource: string, params: UpdateParams) => {
  const url = `${apiUrl}${resourcePort[resource]}/${resource}/${params.data.id}`;
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
  const url = `${apiUrl}${resourcePort[resource]}/${resource}`;
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
  const url = `${apiUrl}${resourcePort[resource]}/${resource}/${params.id}`;
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
  const query = {
    filter: JSON.stringify({ ids: params.ids }),
  };
  const url = `${apiUrl}${resourcePort[resource]}/${resource}?${stringify(
    query
  )}`;
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
  const query = {
    filter: JSON.stringify({ id: params.ids }),
  };
  return httpClient(
    `${apiUrl}${resourcePort[resource]}/${resource}?${stringify(query)}`,
    {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }
  ).then(
    ({ json }) => ({ data: json }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};

export const deleteManyMethod = (
  resource: string,
  params: DeleteManyParams
) => {
  const query = {
    filter: JSON.stringify({ id: params.ids }),
  };
  return httpClient(
    `${apiUrl}${resourcePort[resource]}/${resource}?${stringify(query)}`,
    {
      method: 'DELETE',
    }
  ).then(
    ({ json }) => ({ data: json }),
    ({ message, status, body }) =>
      Promise.reject(new HttpError(message, status, body))
  );
};
