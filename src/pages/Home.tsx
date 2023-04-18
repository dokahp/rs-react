import React, { createRef, useEffect, useState } from 'react';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import CardsList from '../components/CardsList/CardsList';
import { Item } from '../components/CardsList/interfaces/cardslist.interface';
import Modal from '../components/Modal/Modal';
import itemDefaultState from '../data/defaultState';
import searchAPI from '../store/services/searchService';
import ErrorComp from '../components/Error/ErrorComp';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import { searchTextSlice } from '../store/reducers/searchTextSlice';

function Home() {
  const { previousSearch } = useAppSelector((state) => state.searchTextReducer);
  const { setPrevSearchValue } = searchTextSlice.actions;
  const dispatch = useAppDispatch();

  const [sendSearchRequest, { data, isLoading, isError }] =
    searchAPI.useLazySearchQuery();
  const searchInput: React.RefObject<HTMLInputElement> = createRef();
  const [modalInfo, setModalInfo] = useState<Item>(itemDefaultState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchInput.current?.value) {
      dispatch(setPrevSearchValue(searchInput.current?.value));
      sendSearchRequest(searchInput.current?.value, true);
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

  useEffect(() => {
    if (previousSearch) {
      sendSearchRequest(previousSearch, true);
    }
  });

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
