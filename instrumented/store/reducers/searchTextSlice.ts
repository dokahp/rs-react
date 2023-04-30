import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchTextState {
  searchTextValue: string;
  previousSearch: null | string;
}

const initialState: SearchTextState = {
  searchTextValue: '',
  previousSearch: null,
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchTextValue(state, action: PayloadAction<string>) {
      state.searchTextValue = action.payload;
    },
    setPrevSearchValue(state, action: PayloadAction<string>) {
      state.previousSearch = action.payload;
    },
  },
});

export default searchTextSlice.reducer;
