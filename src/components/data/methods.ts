import { fetchUtils, GetListParams, GetOneParams } from 'react-admin';
import { apiUrl } from '../config';

const httpClient = fetchUtils.fetchJson;

export const getList = (resource: string, params: GetListParams) => {
  if (resource === 'streams' || resource === 'news') {
    const from = (params.pagination.page - 1) * params.pagination.perPage;
    const to = from + params.pagination.perPage;
    const url = `${apiUrl}/${resource}/${from}/${to}`;
    return httpClient(url).then(({ headers, json }) => {
      return {
        data: json.Content,
        total: json.Content.length,
      };
    });
  }

  const url = `${apiUrl}/${resource}`;

  return httpClient(url).then(({ headers, json }) => {
    return {
      data: json.Content,
      total: json.Content.length,
    };
  });
};

export const getOne = (resource: string, params: GetOneParams) => {
  const url = `${apiUrl}/${resource}/${params.id}`;

  return httpClient(url).then(({ headers, json }) => {
    return {
      data: json.Content,
    };
  });
};
