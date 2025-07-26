import { configureStore } from '@reduxjs/toolkit'
import { api } from '@core/service/base/base-api'
import uiSlice from '@core/slices/ui-slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export default store