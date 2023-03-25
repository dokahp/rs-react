import React from 'react';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Switch from '../Switch/Switch';
import Upload from '../Upload/Upload';
import './form.css';

type Props = object;

interface State {
  switcher: {
    isOn: boolean;
  };
}

class Form extends React.Component<Props, State> {
  videoTitle: React.RefObject<HTMLInputElement> = React.createRef();

  chanelTitle: React.RefObject<HTMLInputElement> = React.createRef();

  date: React.RefObject<HTMLInputElement> = React.createRef();

  select: React.RefObject<HTMLSelectElement> = React.createRef();

  file: React.RefObject<HTMLInputElement> = React.createRef();

  switchElem: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      switcher: {
        isOn: false,
      },
    };
  }

  handleSwitch() {
    return this.setState((state: State) => {
      return { switcher: { isOn: !state.switcher.isOn } };
    });
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
    const { switcher } = this.state;

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

          <select defaultValue="default" ref={this.select}>
            <option value="Video">Video</option>
            <option value="Stream">Stream</option>
            <option value="default">Select video type</option>
          </select>

          <label htmlFor="react-switch-new" className="label">
            <Switch
              reference={this.switchElem}
              name="react-switch-new"
              isOn={switcher.isOn}
              handleSwitch={this.handleSwitch}
            />
            Send notification to subscribers
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
