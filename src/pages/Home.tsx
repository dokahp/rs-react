import React, { createRef, useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import CardsList from '../components/CardsList/CardsList';
import { Item } from '../components/CardsList/interfaces/cardslist.interface';
import Modal from '../components/Modal/Modal';
import itemDefaultState from '../data/defaultState';
import searchAPI from '../store/services/searchService';
import ErrorComp from '../components/Error/ErrorComp';

function Home() {
  const [sendSearchRequest, { data, isLoading, isError }] =
    searchAPI.useLazySearchQuery();
  const searchInput: React.RefObject<HTMLInputElement> = createRef();
  const [search, setSearch] = useState(
    localStorage.getItem('prevSearch') || ''
  );
  const [cards, setCards] = useState([]);
  const [modalInfo, setModalInfo] = useState<Item>(itemDefaultState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (searchInput.current?.value) {
      setSearch(searchInput.current.value);
      sendSearchRequest(search, true);
    }
  };

  const openModal = (videoId: string) => {
    const singleCard = data
      ? data.items.find((el: Item) => el.id.videoId === videoId)
      : null;
    if (singleCard) {
      setModalInfo(() => singleCard);
      setIsModalOpen(() => true);
    }
  };

  const modalToggl = () => {
    setIsModalOpen((prev: boolean) => !prev);
  };

  // REFETCH AFTER ROUTE CHANGE
  useEffect(() => {
    if (search && !isLoading) {
      sendSearchRequest(search, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // useEffect(() => {
  //   const fetchURL = () => {
  //     const privateKey = 'AIzaSyCKYMT0xKGJddBlTYcwsF_ORA_g9pb3cKg';
  //     const baseURL = 'https://www.googleapis.com/youtube/v3/search';
  //     return `${baseURL}?q=${search}&part=snippet&type=video&maxResults=25&key=${privateKey}`;
  //   };

  //   const getYoutubeSearchData = async () => {
  //     try {
  //       const { data } = await axios.get(fetchURL());
  //       setCards(data.items);
  //       setLoading(() => false);
  //     } catch (error) {
  //       setLoading(() => false);
  //       if (axios.isAxiosError(error)) {
  //         setError({ message: error.message, code: error.code || '' });
  //       }
  //     }
  //     setSearch('');
  //   };
  //   if (search) {
  //     // getYoutubeSearchData();
  //     localStorage.setItem('prevSearch', search);
  //   }
  // }, [search]);

  return (
    <>
      <Search onFormSubmit={onFormSubmit} reference={searchInput} />
      <Loading isLoading={isLoading} />
      {isError && <ErrorComp error={isError} />}
      {data && (
        <CardsList
          items={data.items}
          isLoading={isLoading}
          openModal={openModal}
        />
      )}
      <Modal
        toggl={modalToggl}
        isModalOpen={isModalOpen}
        modalInfo={modalInfo}
      />
    </>
  );
}

export default Home;
