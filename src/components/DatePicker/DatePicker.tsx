import React from 'react';
import './datePicker.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
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
        className={errors[name] ? 'datepicker input-error' : 'datepicker'}
        {...register(name, {
          required: { value: true, message: 'Publish date is required' },
        })}
      />
      {errors[name] && (
        <div className="error-block">{errors[name]?.message?.toString()}</div>
      )}
    </div>
  );
}

export default DatePicker;
