import { configureStore } from '@reduxjs/toolkit'
import { cryptoMarketsApi } from '../components/cryptos/services/Cryptomarkets'
import { NewsApi } from '../components/news/services/NewsServices'

export const store = configureStore({
  reducer: {
   
    [cryptoMarketsApi.reducerPath]:cryptoMarketsApi.reducer,
    [NewsApi.reducerPath]:NewsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoMarketsApi.middleware,NewsApi.middleware),
})

