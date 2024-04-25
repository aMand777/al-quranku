import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getAllSurah = createApi({
  reducerPath: 'getAllSurah',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL }),
  endpoints: (builder) => ({
    getAllSurah: builder.query({
      query: () => '/surat',
    }),
  }),
});

export const { useGetAllSurahQuery } = getAllSurah;
