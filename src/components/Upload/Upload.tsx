import React from 'react';
import './upload.css';
import { useFormContext } from 'react-hook-form';

interface Props {
  file: string | null;
  handleChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Upload({ file, handleChangeFile }: Props) {
  const label: React.RefObject<HTMLLabelElement> = React.createRef();

  const uploadButtonClick = () => {
    label.current?.click();
  };

  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <>
      <div
        className="file-upload-wrapper"
        style={errors.file ? { marginBottom: '5px' } : {}}
      >
        <input
          type="file"
          {...register('file', {
            required: { value: true, message: 'You must upload an image' },
          })}
          id="input-file-upload"
          onChange={handleChangeFile}
          accept="image/png, image/jpg, image/gif, image/jpeg"
          multiple={false}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          ref={label}
          style={errors.file ? { border: '3px dashed rgb(216, 0, 12)' } : {}}
        >
          <div className="image-wrapper">
            <img
              className="uploaded-image"
              src={file || './assets/no-image.png'}
              alt="uploaded"
            />
            <button
              type="button"
              className="upload-button"
              onClick={() => uploadButtonClick()}
            >
              <img src="./assets/upload.svg" alt="upload-icon" />
              Upload a thumbnail<sup>*</sup>
            </button>
          </div>
        </label>
      </div>
      {errors.file && (
        <div className="error-block">{errors.file.message?.toString()}</div>
      )}
    </>
  );
}

export default Upload;
