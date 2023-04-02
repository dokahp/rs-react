import React from 'react';
import './switch.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  isOn: boolean;
  handleSwitch: () => void;
}

function Switch({ name, isOn, handleSwitch }: Props) {
  const { register } = useFormContext();

  return (
    <label
      htmlFor="react-switch-new"
      className="label"
      style={{ display: 'flex', alignItems: 'center' }}
      {...register(name)}
    >
      <input
        name={name}
        onChange={handleSwitch}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        style={{ backgroundColor: isOn ? '#06D6A0' : '#808080' }}
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
      {isOn ? (
        <div className="description">Yes, this video is for kids.</div>
      ) : (
        <div className="description">No, this video is not for children.</div>
      )}
    </label>
  );
}

export default Switch;
