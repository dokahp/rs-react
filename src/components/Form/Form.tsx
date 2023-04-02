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
        <Upload
          file={file}
          handleChangeFile={handleChangeFile}
          // err={errors.file.err}
          // msg={errors.file.msg}
        />

        <Input
          labelText="Video Title"
          name="videoTitle"

          // err={errors.videoTitle.err}
          // msg={errors.videoTitle.msg}
        />
        <Input
          labelText="Chanel Title"
          name="chanelTitle"
          // err={errors.chanelTitle.err}
          // msg={errors.chanelTitle.msg}
        />
        <DatePicker
          name="date"
          // err={errors.date.err} msg={errors.date.msg}
        />
        <Select
          name="select"
          // err={errors.select.err} msg={errors.select.msg}
        />
        <Switch
          name="react-switch-new"
          isOn={isOn}
          handleSwitch={handleSwitch}
        />
        <Checkbox
          name="terms"
          description="I accept terms of usage*"
          // err={errors.terms.err}
          // msg={errors.terms.msg}
        />
        <Checkbox
          name="advertising"
          description="Video contains direct advertising"
          // err={false}
          // msg=""
        />
        <Checkbox
          name="notification"
          description="Send a notification to subscribers"
          // err={false}
          // msg=""
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
