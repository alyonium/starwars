import { transformTableFromBackend } from './transform';
import { RequestParams, TableBackend, TableFrontend } from './params';

const getTable = async (params: RequestParams): Promise<TableFrontend> => {
  const url = new URL('https://swapi.dev/api/people');

  url.search = new URLSearchParams(Object.entries(params)).toString();

  // @ts-ignore
  const response: TableBackend = await fetch(url, {
    method: 'GET',
  }).then((res: any) => {
    return res.json();
  }).catch(() => {
    throw new Error();
  });

  return transformTableFromBackend(response);
};

export const service = {
  getTable,
};
