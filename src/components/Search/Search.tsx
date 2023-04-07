import React, { useEffect, useState } from 'react';
import './search.css';
import { ReactComponent as Loop } from './loop.svg';

function Search() {
  const [searchValue, setSearchValue] = useState(
    () => localStorage.getItem('search-value') || ''
  );

  useEffect(() => {
    return () => {
      localStorage.setItem('search-value', searchValue);
    };
  }, [searchValue]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // FORM SUBMIT ON ENTER OR BUTTON CLICK
  };

  return (
    <div className="search-wrapper">
      <form className="search-form" onSubmit={onFormSubmit}>
        <input
          className="search-input"
          placeholder="Enter for Search"
          onChange={inputChange}
          value={searchValue}
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
