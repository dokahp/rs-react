import React from 'react';
import './datePicker.css';

interface Props {
  referance: React.RefObject<HTMLInputElement>;
  name: string;
  err: boolean;
  msg: string;
}

function DatePicker({ referance, name, err, msg }: Props) {
  return (
    <div className="datepicker-wrapper">
      <span className="label">
        Publication date<sup>*</sup>
      </span>
      <input
        type="datetime-local"
        name={name}
        ref={referance}
        className="datepicker"
        style={
          err ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' } : {}
        }
      />
      {err ? <div className="error-block">{msg}</div> : ''}
    </div>
  );
}

export default DatePicker;
