import React from 'react';
import './datePicker.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  // err: boolean;
  // msg: string;
}

function DatePicker({ name }: Props) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <div className="datepicker-wrapper">
      <span className="label">
        Publication date<sup>*</sup>
      </span>
      <input
        type="datetime-local"
        className="datepicker"
        {...register(name, {
          required: { value: true, message: 'Publish date is required' },
        })}
        style={
          errors[name]
            ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' }
            : {}
        }
      />
      {errors[name] && (
        <div className="error-block">{errors[name]?.message?.toString()}</div>
      )}
    </div>
  );
}

export default DatePicker;
