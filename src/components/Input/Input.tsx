import React from 'react';
import './input.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  labelText: string;
  name: string;
  // err: boolean;
  // msg: string;
}

function Input({ labelText, name }: Props) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <label
        htmlFor="inp"
        className="inp"
        style={
          errors[name]
            ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' }
            : {}
        }
      >
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
