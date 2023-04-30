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
        className={errors[name] ? 'select select-error' : 'select'}
        defaultValue=""
        {...register(name, {
          required: { value: true, message: 'Select video type' },
        })}
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
