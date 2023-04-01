import React from 'react';
import './checkbox.css';

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  description: string;
  err: boolean;
  msg: string;
}

function Checkbox({ reference, description, err, msg }: Props) {
  return (
    <>
      <label
        htmlFor={description}
        className="checkbox-label"
        style={err ? { marginBottom: '5px' } : {}}
      >
        <input
          id={description}
          type="checkbox"
          ref={reference}
          className="checkbox-input"
        />
        {description}
      </label>
      {err ? <div className="error-block">{msg}</div> : ''}
    </>
  );
}

export default Checkbox;
