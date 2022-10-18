import { configureStore } from '@reduxjs/toolkit'
import ListsReducer from './ListsSlice'

export default configureStore({
  reducer: {
      lists: ListsReducer
  },
}) 