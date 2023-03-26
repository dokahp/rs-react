import React from 'react';
import YourCard, { YourCardProps } from '../components/Card/YourCard';
import Form from '../components/Form/Form';
import Snackbar from '../components/Snackbar/Snackbar';

type Props = object;
interface State {
  items: YourCardProps[];
  switcher: {
    isOn: boolean;
  };
  file: string | null;
  errors: {
    file: { err: boolean; msg: string };
    videoTitle: { err: boolean; msg: string };
    chanelTitle: { err: boolean; msg: string };
    date: { err: boolean; msg: string };
    select: { err: boolean; msg: string };
    terms: { err: boolean; msg: string };
  };
  snackbar: { text: string; className: string };
}

class YourVideos extends React.PureComponent<Props, State> {
  form: React.RefObject<HTMLFormElement> = React.createRef();

  videoTitle: React.RefObject<HTMLInputElement> = React.createRef();

  chanelTitle: React.RefObject<HTMLInputElement> = React.createRef();

  date: React.RefObject<HTMLInputElement> = React.createRef();

  select: React.RefObject<HTMLSelectElement> = React.createRef();

  file: React.RefObject<HTMLInputElement> = React.createRef();

  switchElem: React.RefObject<HTMLInputElement> = React.createRef();

  termsCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  advCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  notificationCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleFormValidation = this.handleFormValidation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
    this.state = {
      items: [],
      switcher: { isOn: false },
      file: null,
      errors: {
        file: { err: false, msg: '' },
        videoTitle: { err: false, msg: '' },
        chanelTitle: { err: false, msg: '' },
        date: { err: false, msg: '' },
        select: { err: false, msg: '' },
        terms: { err: false, msg: '' },
      },
      snackbar: { text: '', className: '' },
    };
  }

  handleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const file = this.file.current?.files?.length
      ? this.file.current?.files[0]
      : null;

    const adultContent = this.switchElem.current
      ? this.switchElem.current?.checked
      : false;
    const advertising = this.advCheckbox.current
      ? this.advCheckbox.current?.checked
      : false;
    const notification = this.notificationCheckbox.current
      ? this.notificationCheckbox.current.checked
      : false;

    this.setState({
      errors: {
        file: { err: false, msg: '' },
        videoTitle: { err: false, msg: '' },
        chanelTitle: { err: false, msg: '' },
        date: { err: false, msg: '' },
        select: { err: false, msg: '' },
        terms: { err: false, msg: '' },
      },
    });
    const isFormValid = this.handleFormValidation();
    if (!isFormValid) {
      return {};
    }
    this.setState(
      (state: State) => ({
        items: [
          ...state.items,
          {
            file: file
              ? URL.createObjectURL(file).toString()
              : './assets/no-image.png',
            title: `${this.videoTitle.current?.value}`,
            channelTitle: `${this.chanelTitle.current?.value}`,
            publishedAt: `${this.date.current?.value}`,
            videoType: `${this.select.current?.value}`,
            adultContent,
            advertising,
          },
        ],
      }),
      () => this.handleFormReset()
    );
    if (notification) {
      this.showSnackbar('Notification sended to subscribers');
    }
    return {};
  }

  handleFormValidation(): boolean {
    let isFormValid = true;
    const { file } = this.state;
    if (file === null) {
      this.setState((state: State) => ({
        errors: {
          ...state.errors,
          file: { err: true, msg: 'You must upload an image' },
        },
      }));
      isFormValid = false;
    }
    if (
      this.videoTitle.current &&
      this.chanelTitle.current &&
      this.date.current &&
      this.select.current &&
      this.termsCheckbox.current
    ) {
      const validationEl = [
        this.videoTitle.current,
        this.chanelTitle.current,
        this.date.current,
      ];
      validationEl.map((el: HTMLInputElement) => {
        if (
          el.value &&
          el.value.length > 5 &&
          el.name !== 'date' &&
          /^\d+$/.test(el.value)
        ) {
          const { name } = el;
          this.setState((state: State) => ({
            errors: {
              ...state.errors,
              [name]: { err: true, msg: "Can't contain only numbers" },
            },
          }));
          isFormValid = false;
        }
        if (el.value && el.value.length < 6 && el.name !== 'date') {
          const { name } = el;
          this.setState((state: State) => ({
            errors: {
              ...state.errors,
              [name]: { err: true, msg: 'Minimum 6 characters required' },
            },
          }));
          isFormValid = false;
        }
        if (!el.value) {
          const { name } = el;
          this.setState((state: State) => ({
            errors: {
              ...state.errors,
              [name]: { err: true, msg: 'Required field' },
            },
          }));
          isFormValid = false;
        }
        return el;
      });

      if (this.select.current.value === 'default') {
        this.setState((state: State) => ({
          errors: {
            ...state.errors,
            select: { err: true, msg: 'Select video type' },
          },
        }));
        isFormValid = false;
      }
      if (!this.termsCheckbox.current.checked) {
        this.setState((state: State) => ({
          errors: {
            ...state.errors,
            terms: { err: true, msg: 'Your should accept terms of usage' },
          },
        }));
        isFormValid = false;
      }
    }
    return isFormValid;
  }

  handleFormReset() {
    this.setState({
      switcher: { isOn: false },
      file: null,
      errors: {
        file: { err: false, msg: '' },
        videoTitle: { err: false, msg: '' },
        chanelTitle: { err: false, msg: '' },
        date: { err: false, msg: '' },
        select: { err: false, msg: '' },
        terms: { err: false, msg: '' },
      },
    });
    // this.showSnackbar('Video was added!');
    this.form.current?.reset();
  }

  handleSwitch() {
    this.setState((state: State) => ({
      switcher: { isOn: !state.switcher.isOn },
    }));
  }

  handleChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || !event.target.files.length) {
      return this.setState({
        file: null,
      });
    }
    return this.setState({
      file: event.target.files
        ? URL.createObjectURL(event.target.files[0]).toString()
        : null,
    });
  }

  showSnackbar(text: string) {
    const className = 'show';
    this.setState({
      snackbar: { text, className },
    });
    setTimeout(() => {
      this.setState({
        snackbar: { text: '', className: '' },
      });
    }, 3000);
  }

  render() {
    const { items, switcher, file, errors, snackbar } = this.state;
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
        <Form
          references={{
            formRef: this.form,
            videoTitleRef: this.videoTitle,
            chanelTitleRef: this.chanelTitle,
            dateRef: this.date,
            selectRef: this.select,
            fileRef: this.file,
            switchElemRef: this.switchElem,
            termsCheckboxRef: this.termsCheckbox,
            advCheckboxRef: this.advCheckbox,
            notificationCheckboxRef: this.notificationCheckbox,
          }}
          switcher={switcher}
          file={file}
          errors={errors}
          handleFormSubmit={this.handleFormSubmit}
          handleChangeFile={this.handleChangeFile}
          handleSwitch={this.handleSwitch}
        />
        <div className="main-wrapper">
          <div className="cards-wrapper">{cardsList}</div>
        </div>
        <Snackbar text={snackbar.text} className={snackbar.className} />
      </>
    );
  }
}

export default YourVideos;
