import React from 'react';
import './search.css';
import { ReactComponent as Loop } from './loop.svg';

interface State {
  searchValue: string;
}

class Search extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { searchValue: '' };
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('search-value');
    if (searchValue) {
      this.setState({ searchValue });
    }
  }

  componentWillUnmount(): void {
    const { searchValue } = this.state;
    localStorage.setItem('search-value', searchValue);
  }

  inputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: e.currentTarget.value });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search-wrapper">
        <input
          className="search-input"
          placeholder="Enter for Search"
          onChange={this.inputChange.bind(this)}
          value={searchValue}
        />
        <button className="search-button" type="submit">
          <Loop
            className="loop"
            fill="white"
            style={{ width: '24px', height: '24px', color: 'f1f1f1' }}
          />
        </button>
      </div>
    );
  }
}

export default Search;
