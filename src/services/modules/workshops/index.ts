import { api } from '../../api';

export const workshopApi = api.injectEndpoints({
  endpoints: build => ({
    fetchAllWorkshop: build.query<any, void>({
      query: () => '/workshops?populate=*',
    }),
    fetchOneWorkshopById: build.query<any, string>({
      query: id => `/workshops/${id}?populate=*`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useLazyFetchAllWorkshopQuery,
  useLazyFetchOneWorkshopByIdQuery,
} = workshopApi;
