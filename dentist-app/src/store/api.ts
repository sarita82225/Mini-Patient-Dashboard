import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
reducerPath: 'api',
baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
endpoints: (builder) => ({
getPatients: builder.query<any[], void>({
query: () => 'patients',
}),
getTreatments: builder.query<any[], string>({
query: (id) => `patients/${id}/treatments`,
}),
}),
})

export const { useGetPatientsQuery, useGetTreatmentsQuery } = api