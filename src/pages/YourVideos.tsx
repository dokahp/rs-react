import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import YourCard, { YourCardProps } from '../components/Card/YourCard';
import Snackbar from '../components/Snackbar/Snackbar';
import { Inputs } from '../components/Form/interfaces/form.interface';
import { ISnackbar, ISwitcher } from './interfaces/yourVideos.interface';
import Form from '../components/Form/Form';

function YourVideos() {
  const methods = useForm<Inputs>();
  const [items, setItems] = useState<YourCardProps[]>([]);
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    text: '',
    className: '',
  });
  const [fileURL, setFileURL] = useState<null | string>(null);
  const [switcher, setSwitcher] = useState<ISwitcher>({ isOn: false });

  const handleSwitch = () => {
    setSwitcher({ isOn: !switcher.isOn });
  };

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
    setItems([
      ...items,
      {
        file: fileURL || '',
        title: data.videoTitle,
        channelTitle: data.chanelTitle,
        publishedAt: data.date,
        videoType: data.select,
        adultContent: data.adult,
        advertising: data.advertising,
      },
    ]);
    if (data.notification) {
      showSnackbar('Video added. Notification sent');
    } else {
      showSnackbar(`Video added.`);
    }
    setFileURL(null);
    setSwitcher({ isOn: false });
    methods.reset();
  };

  const cardsList = items.map((card: YourCardProps) => {
    return (
      <YourCard
        key={`${new Date().getTime()}${JSON.stringify(card)}`}
        file={card.file}
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
          switcher={switcher}
          file={fileURL}
          handleFormSubmit={methods.handleSubmit(onSubmit)}
          handleChangeFile={handleChangeFile}
          handleSwitch={handleSwitch}
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
