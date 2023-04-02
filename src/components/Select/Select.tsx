import React from 'react';
import './select.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
}

function Select({ name }: Props) {
  const { register, formState } = useFormContext();
  const { errors } = formState;

  return (
    <>
      <select
        className="select"
        defaultValue=""
        {...register(name, {
          required: { value: true, message: 'Select video type' },
        })}
        style={
          errors[name]
            ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' }
            : {}
        }
      >
        <option value="Video">Video</option>
        <option value="Stream">Stream</option>
        <option value="" hidden>
          Select video type*
        </option>
      </select>
      {errors[name] && (
        <div className="error-block">{errors[name]?.message?.toString()}</div>
      )}
    </>
  );
}

export default Select;
