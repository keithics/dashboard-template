import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { requestReducer } from 'request/request.slice';
import { userReducer } from 'components/user/user.slice';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = {
  user: userReducer,
  request: requestReducer,
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['requestReducers'],
};

export const persistedReducer = persistReducer(persistConfig, combineReducers(reducer));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
