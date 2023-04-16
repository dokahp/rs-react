import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';
import yourVideosReducer from './reducers/yourVideosSlice';

const rootReducer = combineReducers({
  searchTextReducer,
  yourVideosReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
