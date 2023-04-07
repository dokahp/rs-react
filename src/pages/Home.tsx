import React from 'react';
// import CardsList from '../components/CardsList/CardsList';
import Search from '../components/Search/Search';
// import mockData from '../data/mockData';
import Loading from '../components/Loading/Loading';

function Home() {
  // const { items } = mockData;

  return (
    <>
      <Search />
      <Loading />
      {/* <CardsList items={items} /> */}
    </>
  );
}

export default Home;
