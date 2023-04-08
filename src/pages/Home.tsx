import React, { createRef, useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import CardsList from '../components/CardsList/CardsList';

function Home() {
  const searchInput: React.RefObject<HTMLInputElement> = createRef();
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({ message: '', code: '' });

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError({ message: '', code: '' });
    if (searchInput.current?.value) {
      setSearch(searchInput.current?.value);
      setLoading(() => true);
    }
  };

  const fetchURL = () => {
    const privateKey = 'AIzaSyCKYMT0xKGJddBlTYcwsF_ORA_g9pb3cKg';
    const baseURL = 'https://www.googleapis.com/youtube/v3/search';
    return `${baseURL}?q=${search}&part=snippet&type=video&maxResults=25&key=${privateKey}`;
  };

  const getYoutubeSearchData = async () => {
    try {
      const { data } = await axios.get(fetchURL());
      setCards(data.items);
      setLoading(() => false);
    } catch (error) {
      setLoading(() => false);
      if (axios.isAxiosError(error)) {
        setError({ message: error.message, code: error.code || '' });
      }
    }
    setSearch('');
  };

  useEffect(() => {
    if (search) {
      getYoutubeSearchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Search onFormSubmit={onFormSubmit} reference={searchInput} />
      <Loading isLoading={isLoading} />
      <CardsList items={cards} isLoading={isLoading} error={isError} />
    </>
  );
}

export default Home;
