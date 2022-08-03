import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userManage';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
