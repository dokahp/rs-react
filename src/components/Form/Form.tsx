import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Select from '../Select/Select';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Switch from '../Switch/Switch';
import Upload from '../Upload/Upload';
import './form.css';
import { HookFormProps } from './interfaces/form.interface';

function Form({
  switcher,
  file,
  handleFormSubmit,
  handleChangeFile,
  handleSwitch,
}: HookFormProps) {
  const { isOn } = switcher;

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleFormSubmit} autoComplete="off">
        <Upload file={file} handleChangeFile={handleChangeFile} />

        <Input labelText="Video Title" name="videoTitle" />
        <Input labelText="Chanel Title" name="chanelTitle" />
        <DatePicker name="date" />
        <Select name="select" />
        <Switch name="adult" isOn={isOn} handleSwitch={handleSwitch} />
        <Checkbox name="terms" description="I accept terms of usage*" />
        <Checkbox
          name="advertising"
          description="Video contains direct advertising"
        />
        <Checkbox
          name="notification"
          description="Send a notification to subscribers"
        />
        <div
          style={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '20px',
          }}
        >
          <sup>*</sup> - Required field
        </div>
        <SubmitBtn />
      </form>
    </div>
  );
}

export default Form;
