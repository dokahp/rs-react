import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Select from '../Select/Select';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Switch from '../Switch/Switch';
import Upload from '../Upload/Upload';
import './form.css';

type Props = object;

class Form extends React.Component<Props, object> {
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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {};
  }

  handleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log(
      this.videoTitle.current?.value,
      this.chanelTitle.current?.value,
      this.date.current?.value,
      this.select.current?.value,
      this.file.current?.files?.length ? this.file.current?.files[0] : null,
      this.switchElem.current?.checked
    );
  }

  render() {
    return (
      <div className="form-wrapper">
        <form
          className="form"
          onSubmit={this.handleFormSubmit}
          autoComplete="off"
        >
          <Upload reference={this.file} />
          <Input referance={this.videoTitle} labelText="Video Title" />
          <Input referance={this.chanelTitle} labelText="Chanel Title" />
          <DatePicker referance={this.date} />
          <Select referance={this.select} />
          <Switch reference={this.switchElem} name="react-switch-new" />
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
    );
  }
}

export default Form;
