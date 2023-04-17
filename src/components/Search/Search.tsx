import React, { useEffect } from 'react';
import './search.css';
import { ReactComponent as Loop } from './loop.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { searchTextSlice } from '../../store/reducers/searchTextSlice';

interface SearchProps {
  reference: React.RefObject<HTMLInputElement>;
  onFormSubmit: (e: React.SyntheticEvent) => void;
}

function Search({ reference, onFormSubmit }: SearchProps) {
  const { searchTextValue } = useAppSelector(
    (state) => state.searchTextReducer
  );
  const { setSearchTextValue } = searchTextSlice.actions;
  const dispatch = useAppDispatch();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchTextValue(e.target.value));
  };

  useEffect(() => {
    return localStorage.setItem('prevSearch', searchTextValue);
  });

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={onFormSubmit}>
        <input
          className="search-input"
          placeholder="Enter for Search"
          onChange={inputChange}
          value={searchTextValue}
          ref={reference}
        />
        <button className="search-button" type="submit">
          <Loop
            className="loop"
            fill="white"
            style={{ width: '24px', height: '24px', color: 'f1f1f1' }}
          />
        </button>
      </form>
    </div>
  );
}

export default Search;
