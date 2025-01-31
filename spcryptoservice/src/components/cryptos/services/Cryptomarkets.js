import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// crypto headers 
let Cryptoheaders= {
    'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY, // securing the apikey from  users 
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}


// base url
 let baseUrl= 'https://coinranking1.p.rapidapi.com'

//  combining the baseUrl and header for request to server
const createRequest=(url)=>({url,headers:Cryptoheaders})

// Define a service using a base URL and expected endpoints
export const cryptoMarketsApi = createApi({
  reducerPath: 'cryptomarketsApi',
  baseQuery: fetchBaseQuery({ baseUrl }), // linked The base url to make api req
  endpoints: (builder) => ({
    getcryptoMarkets: builder.query({
        query:()=>createRequest("/coins") // fetches al the coins from api
    }),
    getcryptoStats: builder.query({
        query:()=>createRequest("/stats") // fetches totals coins stats like marketcap totalcoins totalcapital etc
    }),
    getcryptoDetails: builder.query({
        query:(coinId)=>createRequest(`/coin/${coinId}`) //fetches all of a single coin details req
    }),
    getcryptoHistory: builder.query({ // fetches the history of particular coin with timeperiods given
        query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`)
    }),
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetcryptoMarketsQuery,
    useGetcryptoStatsQuery,
    useGetcryptoDetailsQuery ,useGetcryptoHistoryQuery} = cryptoMarketsApi