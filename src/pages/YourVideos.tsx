import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import YourCard, { YourCardProps } from '../components/Card/YourCard';
import Snackbar from '../components/Snackbar/Snackbar';
import { Inputs } from '../components/Form/interfaces/form.interface';
import { ISnackbar, ISwitcher } from './interfaces/yourVideos.interface';
import Form from '../components/Form/Form';

function YourVideos() {
  // const {
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [items, setItems] = useState<YourCardProps[]>([]);
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    text: '',
    className: '',
  });
  const [fileURL, setFileURL] = useState<null | string>(null);
  const [switcher, setSwitcher] = useState<ISwitcher>({ isOn: false });
  // const [errors, setErrors] = useState<IErrors>({
  //   file: { err: false, msg: '' },
  //   videoTitle: { err: false, msg: '' },
  //   chanelTitle: { err: false, msg: '' },
  //   date: { err: false, msg: '' },
  //   select: { err: false, msg: '' },
  //   terms: { err: false, msg: '' },
  // });

  // const form: React.RefObject<HTMLFormElement> = React.createRef();
  // const videoTitle: React.RefObject<HTMLInputElement> = React.createRef();
  // const chanelTitle: React.RefObject<HTMLInputElement> = React.createRef();
  // const date: React.RefObject<HTMLInputElement> = React.createRef();
  // const select: React.RefObject<HTMLSelectElement> = React.createRef();
  // const fileRef: React.RefObject<HTMLInputElement> = React.createRef();
  // const switchElem: React.RefObject<HTMLInputElement> = React.createRef();
  // const termsCheckbox: React.RefObject<HTMLInputElement> = React.createRef();
  // const advCheckbox: React.RefObject<HTMLInputElement> = React.createRef();
  // const notificationCheckbox: React.RefObject<HTMLInputElement> =
  //   React.createRef();

  // const resetErrors = () => {
  //   setErrors({
  //     file: { err: false, msg: '' },
  //     videoTitle: { err: false, msg: '' },
  //     chanelTitle: { err: false, msg: '' },
  //     date: { err: false, msg: '' },
  //     select: { err: false, msg: '' },
  //     terms: { err: false, msg: '' },
  //   });
  // };

  // const handleFormReset = () => {
  //   setSwitcher({ isOn: false });
  //   setFileURL(null);
  //   resetErrors();
  //   form.current?.reset();
  // };

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

  // const showSnackbar = (text: string) => {
  //   const className = 'show';
  //   setSnackbar({ text, className });

  //   setTimeout(() => {
  //     setSnackbar({ text: '', className: '' });
  //   }, 4000);
  // };

  // const handleFormValidation = (): boolean => {
  //   let isFormValid = true;

  //   if (fileURL === null) {
  //     setErrors({
  //       ...errors,
  //       file: { err: true, msg: 'You must upload an image' },
  //     });

  //     isFormValid = false;
  //   }
  //   if (
  //     videoTitle.current &&
  //     chanelTitle.current &&
  //     date.current &&
  //     select.current &&
  //     termsCheckbox.current
  //   ) {
  //     const validationEl = [
  //       videoTitle.current,
  //       chanelTitle.current,
  //       date.current,
  //     ];
  //     validationEl.map((el: HTMLInputElement) => {
  //       if (
  //         el.value &&
  //         el.value.length > 5 &&
  //         el.name !== 'date' &&
  //         /^\d+$/.test(el.value)
  //       ) {
  //         const { name } = el;
  //         setErrors({
  //           ...errors,
  //           [name]: { err: true, msg: "Can't contain only numbers" },
  //         });
  //         isFormValid = false;
  //       }
  //       if (el.value && el.value.length < 6 && el.name !== 'date') {
  //         const { name } = el;
  //         setErrors({
  //           ...errors,
  //           [name]: { err: true, msg: 'Minimum 6 characters required' },
  //         });
  //         isFormValid = false;
  //       }
  //       if (!el.value) {
  //         const { name } = el;
  //         setErrors({
  //           ...errors,
  //           [name]: { err: true, msg: 'Required field' },
  //         });
  //         isFormValid = false;
  //       }
  //       return el;
  //     });

  //     if (select.current.value === 'default') {
  //       setErrors({
  //         ...errors,
  //         select: { err: true, msg: 'Select video type' },
  //       });
  //       isFormValid = false;
  //     }
  //     if (!termsCheckbox.current.checked) {
  //       setErrors({
  //         ...errors,
  //         terms: { err: true, msg: 'Your should accept terms of usage' },
  //       });
  //       isFormValid = false;
  //     }
  //   }

  //   return isFormValid;
  // };

  // const handleFormSubmit = (event: React.SyntheticEvent) => {
  //   event.preventDefault();
  //   const fileEl = fileRef.current?.files?.length
  //     ? fileRef.current?.files[0]
  //     : null;
  //   const adultContent = switchElem.current
  //     ? switchElem.current?.checked
  //     : false;
  //   const advertising = advCheckbox.current
  //     ? advCheckbox.current?.checked
  //     : false;
  //   const notification = notificationCheckbox.current
  //     ? notificationCheckbox.current.checked
  //     : false;

  //   resetErrors();

  //   const isFormValid = handleFormValidation();
  //   if (!isFormValid) {
  //     return {};
  //   }
  //   setItems([
  //     ...items,
  //     {
  //       file: fileEl
  //         ? URL.createObjectURL(fileEl).toString()
  //         : './assets/no-image.png',
  //       title: `${videoTitle.current?.value}`,
  //       channelTitle: `${chanelTitle.current?.value}`,
  //       publishedAt: `${date.current?.value}`,
  //       videoType: `${select.current?.value}`,
  //       adultContent,
  //       advertising,
  //     },
  //   ]);

  //   handleFormReset();

  //   if (notification) {
  //     showSnackbar('Video added. Notification sent');
  //   } else {
  //     showSnackbar(`Video added.`);
  //   }
  //   return {};
  // };

  // useEffect(() => {
  //   if (items) {
  //     handleFormReset();
  //   }
  // }, [items]);

  // const { items, switcher, file, errors, snackbar } = state;

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
  const methods = useForm<Inputs>();
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
