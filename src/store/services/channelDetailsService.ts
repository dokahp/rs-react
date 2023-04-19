import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Search } from '../models/search.model';

const channelDetailsAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
  }),
  keepUnusedDataFor: 3600,

  endpoints: (build) => ({
    search: build.query<Search, string>({
      query: (channelId: string) => ({
        url: '/channels',
        params: {
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          id: channelId,
          part: 'id,snippet,statistics',
        },
      }),
    }),
  }),
});

export default channelDetailsAPI;
