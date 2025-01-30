import { configureStore } from '@reduxjs/toolkit'
import { cryptoMarketsApi } from '../components/cryptos/services/Cryptomarkets'

export const store = configureStore({
  reducer: {
   
    [cryptoMarketsApi.reducerPath]:cryptoMarketsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoMarketsApi.middleware),
})

