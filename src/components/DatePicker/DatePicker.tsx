import React from 'react';
import './datePicker.css';

interface Props {
  referance: React.RefObject<HTMLInputElement>;
}

class DatePicker extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { referance } = this.props;
    return (
      <div className="datepicker-wrapper">
        <span className="label">
          Publication date<sup>*</sup>
        </span>
        <input type="datetime-local" ref={referance} className="datepicker" />
      </div>
    );
  }
}

export default DatePicker;
