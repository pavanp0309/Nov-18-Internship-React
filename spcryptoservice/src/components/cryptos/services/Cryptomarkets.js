import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// crypto headers 
let Cryptoheaders= {
    'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}


// base url
 let baseUrl= 'https://coinranking1.p.rapidapi.com'

// Define a service using a base URL and expected endpoints
export const cryptoMarketsApi = createApi({
  reducerPath: 'cryptomarketsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPokemonByName: ""
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = cryptoMarketsApi