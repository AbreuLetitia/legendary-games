import { createSlice } from '@reduxjs/toolkit';
import { IUserState, IUserActions } from './types';

const userSlice = createSlice<IUserState, IUserActions>({
  name: 'user',
  initialState: {
    name: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
