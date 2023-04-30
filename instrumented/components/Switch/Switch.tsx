import React, { useEffect, useState } from 'react';
import './switch.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
}

function Switch({ name }: Props) {
  const { register, formState } = useFormContext();
  const { submitCount } = formState;
  const [switcher, setSwitcher] = useState<boolean>(false);

  const handleSwitch = () => {
    setSwitcher(!switcher);
  };

  useEffect(() => {
    setSwitcher(false);
  }, [submitCount]);

  return (
    <label htmlFor="react-switch-new" className="label" {...register(name)}>
      <input
        name={name}
        onChange={handleSwitch}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        className={
          switcher ? 'react-switch-label on' : 'react-switch-label off'
        }
        htmlFor="react-switch-new"
      >
        <span className="react-switch-button" />
      </label>
      {switcher ? (
        <div className="description">Yes, this video is for kids.</div>
      ) : (
        <div className="description">No, this video is not for children.</div>
      )}
    </label>
  );
}

export default Switch;
