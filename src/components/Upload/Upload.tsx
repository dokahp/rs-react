import React from 'react';
import './upload.css';

interface Props {
  reference: React.RefObject<HTMLInputElement>;
  file: string | null;
  handleChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  err: boolean;
  msg: string;
}

class Upload extends React.PureComponent<Props, object> {
  label: React.RefObject<HTMLLabelElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.uploadButtonClick = this.uploadButtonClick.bind(this);
  }

  uploadButtonClick() {
    this.label.current?.click();
  }

  render() {
    const { reference, file, handleChangeFile, err, msg } = this.props;
    return (
      <>
        <div
          className="file-upload-wrapper"
          style={err ? { marginBottom: '5px' } : {}}
        >
          <input
            name="file-upload"
            ref={reference}
            type="file"
            id="input-file-upload"
            onChange={handleChangeFile}
            accept="image/png, image/jpg, image/gif, image/jpeg"
            multiple={false}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            ref={this.label}
            style={err ? { border: '3px dashed rgb(216, 0, 12)' } : {}}
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
                onClick={this.uploadButtonClick}
              >
                <img src="./assets/upload.svg" alt="upload-icon" />
                Upload a thumbnail<sup>*</sup>
              </button>
            </div>
          </label>
        </div>
        {err ? <div className="error-block">{msg}</div> : ''}
      </>
    );
  }
}

export default Upload;
