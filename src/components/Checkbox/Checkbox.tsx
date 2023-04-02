import React from 'react';
import './checkbox.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  description: string;
}

function Checkbox({ name, description }: Props) {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef();
  const checked = checkboxRef.current ? checkboxRef.current.checked : false;
  return (
    <>
      <label
        htmlFor={description}
        className="checkbox-label"
        style={errors[name] ? { marginBottom: '5px' } : {}}
      >
        <input
          id={description}
          type="checkbox"
          className="checkbox-input"
          {...register(name, {
            required: {
              value: name === 'terms' && !checked,
              message: 'You must accept terms of usage',
            },
          })}
        />
        {description}
      </label>
      {errors[name] && (
        <div className="error-block">{errors[name]?.message?.toString()}</div>
      )}
    </>
  );
}

export default Checkbox;
