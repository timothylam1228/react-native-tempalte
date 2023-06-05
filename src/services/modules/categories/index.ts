import { api } from '../../api';

export const categoryApi = api.injectEndpoints({
  endpoints: build => ({
    fetchAll: build.query<any, void>({
      query: () => '/categories',
    }),
  }),
  overrideExisting: false,
});

export const { useLazyFetchAllQuery } = categoryApi;
