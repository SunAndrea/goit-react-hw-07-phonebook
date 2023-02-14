import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const onFinally = state => {
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: onRejected,

    [addContact.pending]: onPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state = state.items.push(action.payload);
    },
    [addContact.rejected]: onRejected,

    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => {
        return contact.id !== action.payload.id;
      });
    },
    [deleteContact.rejected]: onRejected,
    [deleteContact.finally]: onFinally,
  },
});

export const contactsReducer = contactsSlice.reducer;
