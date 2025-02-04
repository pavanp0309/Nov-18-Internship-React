import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



let Key=import.meta.env.VITE_NEWS_API_KEY

// base url
 let baseUrl= 'https://gnews.io/api/v4/top-headlines'

//  combining the baseUrl and header for request to server
const createRequest=(url)=>({url})

// Define a service using a base URL and expected endpoints
export const NewsApi = createApi({
  reducerPath: 'NewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }), // linked The base url to make api req
  endpoints: (builder) => ({
    getGeneralNews: builder.query({
      query:({category})=>createRequest(`?category=${category}&lang=en&country=us&max=10&apikey=${Key}`) // fetches all the top Headlines 
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetGeneralNewsQuery} = NewsApi