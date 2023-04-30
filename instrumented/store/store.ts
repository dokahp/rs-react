import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchTextSlice';
import yourVideosReducer from './reducers/yourVideosSlice';
import searchAPI from './services/searchService';

const rootReducer = combineReducers({
  searchTextReducer,
  yourVideosReducer,
  [searchAPI.reducerPath]: searchAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(searchAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
