import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Alert } from 'react-native/Libraries/Alert/Alert';

const baseQuery = fetchBaseQuery({
  // baseUrl: process.env.API_URL,
  baseUrl: 'http://10.0.2.2:1337/api',
  headers: {
    Authorization: 'Bearer ' + process.env.STRAPI_API_TOKEN,
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    Alert.alert('Unauthorized');
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
