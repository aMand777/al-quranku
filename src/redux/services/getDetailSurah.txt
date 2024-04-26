import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getDetailSurah = createApi({
  reducerPath: 'getDetailSurah',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL }),
  endpoints: (builder) => ({
    getDetailSurah: builder.query({
      query: (number) => `/surat/${number}`,
    }),
  }),
});

export const { useGetDetailSurahQuery } = getDetailSurah;
