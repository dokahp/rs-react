import React from 'react';
import YourCard, { YourCardProps } from '../Card/YourCard';
import Checkbox from '../Checkbox/Checkbox';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Select from '../Select/Select';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Switch from '../Switch/Switch';
import Upload from '../Upload/Upload';

import './form.css';

type Props = object;

interface State {
  items: YourCardProps[];
  switcher: {
    isOn: boolean;
  };
  file: string | null;
}

class Form extends React.Component<Props, State> {
  form: React.RefObject<HTMLFormElement> = React.createRef();

  videoTitle: React.RefObject<HTMLInputElement> = React.createRef();

  chanelTitle: React.RefObject<HTMLInputElement> = React.createRef();

  date: React.RefObject<HTMLInputElement> = React.createRef();

  select: React.RefObject<HTMLSelectElement> = React.createRef();

  file: React.RefObject<HTMLInputElement> = React.createRef();

  switchElem: React.RefObject<HTMLInputElement> = React.createRef();

  advCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  notificationCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = { items: [], switcher: { isOn: false }, file: null };
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

    // console.log(
    //   this.file.current?.files?.length ? this.file.current?.files[0] : null,
    //   this.videoTitle.current?.value,
    //   this.chanelTitle.current?.value,
    //   this.date.current?.value,
    //   this.select.current?.value,
    //   this.switchElem.current?.checked,
    //   this.advCheckbox.current?.checked,
    //   this.notificationCheckbox.current?.checked
    // );
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
  }

  handleFormReset() {
    this.setState({
      switcher: { isOn: false },
      file: null,
    });
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

  render() {
    const { items, switcher, file } = this.state;
    const { isOn } = switcher;
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
        <div className="form-wrapper">
          <form
            className="form"
            onSubmit={this.handleFormSubmit}
            autoComplete="off"
            ref={this.form}
          >
            <Upload
              reference={this.file}
              file={file}
              handleChangeFile={this.handleChangeFile}
            />
            <Input referance={this.videoTitle} labelText="Video Title" />
            <Input referance={this.chanelTitle} labelText="Chanel Title" />
            <DatePicker referance={this.date} />
            <Select referance={this.select} />
            <Switch
              reference={this.switchElem}
              name="react-switch-new"
              isOn={isOn}
              handleSwitch={this.handleSwitch}
            />
            <Checkbox
              referance={this.advCheckbox}
              description="Video contains direct advertising"
            />
            <Checkbox
              referance={this.notificationCheckbox}
              description="Send a notification to subscribers"
            />
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '20px',
              }}
            >
              <sup>*</sup> - Required field
            </div>
            <SubmitBtn />
          </form>
        </div>
        <div className="main-wrapper">
          <div className="cards-wrapper">{cardsList}</div>
        </div>
      </>
    );
  }
}

export default Form;
