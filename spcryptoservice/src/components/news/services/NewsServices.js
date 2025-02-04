import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'





// base url
 let baseUrl= ''

//  combining the baseUrl and header for request to server
const createRequest=(url)=>({url})

// Define a service using a base URL and expected endpoints
export const NewsApi = createApi({
  reducerPath: 'NewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }), // linked The base url to make api req
  endpoints: (builder) => ({
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {} = NewsApi