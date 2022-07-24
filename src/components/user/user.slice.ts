import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'rtk/store';
import { PURGE } from 'redux-persist';
import {UserDataInterface} from 'components/user/user.interface';

const initialState: UserDataInterface = {
  email: '',
  gravatar: '',
  isLoggedIn: false,
  roles: [],
  isAdmin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setUserData: (state: Draft<UserDataInterface>, action: PayloadAction<UserDataInterface>) => {
      action.payload.isLoggedIn = true;
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { logout, setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;
