import React from 'react';
import './upload.css';

interface Props {
  reference: React.RefObject<HTMLInputElement>;
}

interface State {
  file: string | null;
}

class Upload extends React.PureComponent<Props, State> {
  label: React.RefObject<HTMLLabelElement> = React.createRef();

  constructor(props: Props) {
    super(props);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.uploadButtonClick = this.uploadButtonClick.bind(this);
    this.state = { file: null };
  }

  handleChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || !event.target.files.length) {
      return this.setState({
        file: null,
      });
    }
    return this.setState({
      file: event.target.files
        ? URL.createObjectURL(event.target.files[0]).toString()
        : null,
    });
  }

  uploadButtonClick() {
    this.label.current?.click();
  }

  render() {
    const { reference } = this.props;
    const { file } = this.state;
    return (
      <div className="file-upload-wrapper">
        <input
          name="file-upload"
          ref={reference}
          type="file"
          id="input-file-upload"
          onChange={this.handleChangeFile}
          accept="image/png, image/jpg, image/gif, image/jpeg"
          multiple={false}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          ref={this.label}
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
    );
  }
}

export default Upload;
