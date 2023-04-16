import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchTextState {
  searchTextValue: string;
}

const initialState: SearchTextState = {
  searchTextValue: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchTextValue(state, action: PayloadAction<string>) {
      state.searchTextValue = action.payload;
    },
  },
});

export default searchTextSlice.reducer;
