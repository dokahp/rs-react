import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DatePicker from '../DatePicker/DatePicker';
import Input from '../Input/Input';
import Select from '../Select/Select';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Switch from '../Switch/Switch';
import Upload from '../Upload/Upload';
import './form.css';
import { FormProps } from './interfaces/form.interface';

class Form extends React.Component<FormProps, object> {
  constructor(props: FormProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      references,
      switcher,
      file,
      errors,
      handleFormSubmit,
      handleChangeFile,
      handleSwitch,
    } = this.props;
    const { isOn } = switcher;
    const {
      formRef,
      fileRef,
      videoTitleRef,
      chanelTitleRef,
      dateRef,
      selectRef,
      switchElemRef,
      termsCheckboxRef,
      advCheckboxRef,
      notificationCheckboxRef,
    } = references;

    return (
      <div className="form-wrapper">
        <form
          className="form"
          onSubmit={handleFormSubmit}
          autoComplete="off"
          ref={formRef}
        >
          <Upload
            reference={fileRef}
            file={file}
            handleChangeFile={handleChangeFile}
            err={errors.file.err}
            msg={errors.file.msg}
          />
          <Input
            reference={videoTitleRef}
            labelText="Video Title"
            name="videoTitle"
            err={errors.videoTitle.err}
            msg={errors.videoTitle.msg}
          />
          <Input
            reference={chanelTitleRef}
            labelText="Chanel Title"
            name="chanelTitle"
            err={errors.chanelTitle.err}
            msg={errors.chanelTitle.msg}
          />
          <DatePicker
            referance={dateRef}
            name="date"
            err={errors.date.err}
            msg={errors.date.msg}
          />
          <Select
            referance={selectRef}
            name="select"
            err={errors.select.err}
            msg={errors.select.msg}
          />
          <Switch
            reference={switchElemRef}
            name="react-switch-new"
            isOn={isOn}
            handleSwitch={handleSwitch}
          />
          <Checkbox
            reference={termsCheckboxRef}
            description="I accept terms of usage*"
            err={errors.terms.err}
            msg={errors.terms.msg}
          />
          <Checkbox
            reference={advCheckboxRef}
            description="Video contains direct advertising"
            err={false}
            msg=""
          />
          <Checkbox
            reference={notificationCheckboxRef}
            description="Send a notification to subscribers"
            err={false}
            msg=""
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
}

export default Form;
