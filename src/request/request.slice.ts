import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RequestInterface, RequestPayloadInterface } from './request.interface';
import { RootState } from 'rtk/store';

const initialState: RequestInterface = {
  title: null,
  message: null,
  isFailure: false,
  isLoading: false,
  isValidationError: false,
  isClose: true,
  saveSuccess: false,
  deletedSuccess: false,
  isInvalidToken: false,
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    requestInProgress: (state: Draft<RequestInterface>) => {
      state.isLoading = true;
    },
    isRequestFinished: (state: Draft<RequestInterface>) => {
      state.isLoading = false;
    },
    requestFailure: (state: Draft<RequestInterface>) => {
      state.isFailure = true;
      state.message = 'An error occurred while requesting the API.';
    },
    validationError: (state: Draft<RequestInterface>, action: PayloadAction<RequestPayloadInterface>) => {
      state.isValidationError = true;
      state.message = action.payload.message;
      state.title = action.payload.title;
    },
    saveSuccess: (state: Draft<RequestInterface>, action: PayloadAction<RequestPayloadInterface>) => {
      state.saveSuccess = true;
      state.message = action.payload.message;
      state.title = action.payload.title;
    },
    deleteSuccess: (state: Draft<RequestInterface>) => {
      state.deletedSuccess = true;
      state.isLoading = false;
    },
    resetRequest: () => initialState,
    logout: (state: Draft<RequestInterface>) => {
      state.isInvalidToken = true;
      state.isLoading = false;
    },
  },
});

export const { resetRequest, isRequestFinished, requestInProgress, requestFailure, saveSuccess, validationError } =
  requestSlice.actions;
export const selectRequest = (state: RootState) => state.request;
export const requestReducer = requestSlice.reducer;
