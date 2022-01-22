import { createSlice } from '@reduxjs/toolkit'

const sliceItems = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [...state, payload],
    deleteContacts: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  },
})
export const { addContact, deleteContacts } = sliceItems.actions
export default sliceItems.reducer
