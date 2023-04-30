import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Search } from '../models/search.model';

const searchAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
  }),
  keepUnusedDataFor: 3600,

  endpoints: (build) => ({
    search: build.query<Search, string>({
      query: (searchValue: string) => ({
        url: '/search',
        params: {
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          q: searchValue,
          part: 'snippet',
          type: 'video',
          maxResults: '25',
        },
      }),
    }),
  }),
});

export default searchAPI;
