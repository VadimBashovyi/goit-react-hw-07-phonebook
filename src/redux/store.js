import { configureStore, combineReducers } from '@reduxjs/toolkit'

import items from '../redux/phonebook/slice-items'
import filter from '../redux/phonebook/slice-filter'

const contacts = combineReducers({
  items,
  filter,
})

export const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
