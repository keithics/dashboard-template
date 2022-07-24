import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { SidebarStatusInterface } from './sidebar.interface';
import { RootState } from 'rtk/store';

const initialState: SidebarStatusInterface = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state: Draft<SidebarStatusInterface>, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export const selectSidebarOpen = (state: RootState) => state.sidebar.isOpen;
export const sidebarReducer = sidebarSlice.reducer;
