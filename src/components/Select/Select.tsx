import React from 'react';
import './select.css';

interface Props {
  referance: React.RefObject<HTMLSelectElement>;
  name: string;
  err: boolean;
  msg: string;
}

function Select({ referance, name, err, msg }: Props) {
  return (
    <>
      <select
        className="select"
        defaultValue="default"
        name={name}
        ref={referance}
        style={
          err ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' } : {}
        }
      >
        <option value="Video">Video</option>
        <option value="Stream">Stream</option>
        <option value="default" hidden>
          Select video type*
        </option>
      </select>
      {err ? <div className="error-block">{msg}</div> : ''}
    </>
  );
}

export default Select;
