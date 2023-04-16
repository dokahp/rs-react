import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';

const rootReducer = combineReducers({
  searchTextReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
