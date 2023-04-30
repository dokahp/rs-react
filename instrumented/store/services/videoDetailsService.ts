import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { VideoDetails } from '../../components/Modal/interfaces/videoDetail.interface';

const videoDetailsAPI = createApi({
  reducerPath: 'searchAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
  }),
  keepUnusedDataFor: 3600,

  endpoints: (build) => ({
    search: build.query<VideoDetails, string>({
      query: (videoId: string) => ({
        url: '/videos',
        params: {
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          part: 'id,snippet,contentDetails,statistics',
          id: videoId,
        },
      }),
    }),
  }),
});

export default videoDetailsAPI;
