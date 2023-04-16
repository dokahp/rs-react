import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import YourCard from '../components/Card/YourCard';
import Snackbar from '../components/Snackbar/Snackbar';
import { Inputs } from '../components/Form/interfaces/form.interface';
import { ISnackbar } from './interfaces/yourVideos.interface';
import Form from '../components/Form/Form';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import { yourVideosSlice } from '../store/reducers/yourVideosSlice';

function YourVideos() {
  const { yourVideos } = useAppSelector((state) => state.yourVideosReducer);
  const dispatch = useAppDispatch();
  const { addVideo } = yourVideosSlice.actions;
  const methods = useForm<Inputs>();

  const [snackbar, setSnackbar] = useState<ISnackbar>({
    text: '',
    className: '',
  });
  const [fileURL, setFileURL] = useState<null | string>(null);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!event.target.files || !event.target.files.length) {
      return setFileURL(null);
    }
    return setFileURL(
      event.target.files
        ? URL.createObjectURL(event.target.files[0]).toString()
        : null
    );
  };

  const showSnackbar = (text: string) => {
    const className = 'show';
    setSnackbar({ text, className });

    setTimeout(() => {
      setSnackbar({ text: '', className: '' });
    }, 4000);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      addVideo({
        file: fileURL || '',
        title: data.videoTitle,
        channelTitle: data.chanelTitle,
        publishedAt: data.date,
        videoType: data.select,
        adultContent: data.adult,
        advertising: data.advertising,
      })
    );
    if (data.notification) {
      showSnackbar('Video added. Notification sent');
    } else {
      showSnackbar(`Video added.`);
    }
    setFileURL(null);
    methods.reset();
  };

  const cardsList = yourVideos.map((card) => {
    return (
      <YourCard
        key={`${new Date().getTime()}${JSON.stringify(card)}`}
        file={card.file || ''}
        title={card.title}
        channelTitle={card.channelTitle}
        publishedAt={card.publishedAt}
        videoType={card.videoType}
        adultContent={card.adultContent}
        advertising={card.advertising}
      />
    );
  });

  return (
    <>
      <FormProvider {...methods}>
        <Form
          file={fileURL}
          handleFormSubmit={methods.handleSubmit(onSubmit)}
          handleChangeFile={handleChangeFile}
        />
      </FormProvider>
      <div className="main-wrapper">
        <div className="cards-wrapper">{cardsList}</div>
      </div>
      <Snackbar text={snackbar.text} className={snackbar.className} />
    </>
  );
}

export default YourVideos;
