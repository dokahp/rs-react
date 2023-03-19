import React from 'react';
import CardsList from '../components/CardsList/CardsList';
import Search from '../components/Search/Search';
import mockData from '../data/mockData';

class Home extends React.PureComponent {
  render(): React.ReactNode {
    const { items } = mockData;

    return (
      <>
        <Search />
        <CardsList items={items} />
      </>
    );
  }
}

export default Home;
