import React from 'react';
import './input.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  labelText: string;
  name: string;
}

function Input({ labelText, name }: Props) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <label htmlFor="inp" className={errors[name] ? 'inp input-error' : 'inp'}>
        <input
          autoComplete="new-password"
          type="text"
          id="inp"
          {...register(name, {
            required: `${labelText} is required`,
            minLength: {
              value: 6,
              message: `${labelText} must be greater than 6 symbols`,
            },
          })}
          placeholder="&nbsp;"
        />
        <span className="label">
          {labelText}
          <sup>*</sup>
        </span>
        <span className="focus-bg" />
      </label>
      {errors[name] && (
        <div className="error-block">{errors[name]?.message?.toString()}</div>
      )}
    </>
  );
}

export default Input;
