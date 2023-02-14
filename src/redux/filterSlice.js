import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const { onFilter } = filterSlice.actions;
