import React, { useState } from 'react';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';

function Home() {
  const [isLoading, setLoading] = useState(false);

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading((prev: boolean) => !prev);
  };

  return (
    <>
      <Search onFormSubmit={onFormSubmit} />
      <Loading isLoading={isLoading} />
      {/* <CardsList items={items} /> */}
    </>
  );
}

export default Home;
