import React from 'react';
import './input.css';

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  labelText: string;
  name: string;
  err: boolean;
  msg: string;
}

function Input({ labelText, name, reference, err, msg }: Props) {
  return (
    <>
      <label
        htmlFor="inp"
        className="inp"
        style={
          err ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' } : {}
        }
      >
        <input
          ref={reference}
          autoComplete="new-password"
          type="text"
          id="inp"
          name={name}
          placeholder="&nbsp;"
        />
        <span className="label">
          {labelText}
          <sup>*</sup>
        </span>
        <span className="focus-bg" />
      </label>
      {err ? <div className="error-block">{msg}</div> : ''}
    </>
  );
}

export default Input;
