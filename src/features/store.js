import { configureStore } from '@reduxjs/toolkit'
import spaceSlice from './backendRoutes/spaceSlice'


export const store = configureStore({
  reducer: {
   space: spaceSlice
  }
})

