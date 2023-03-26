import React from 'react';
import './input.css';

interface Props {
  referance: React.RefObject<HTMLInputElement>;
  labelText: string;
  err: boolean;
  msg: string;
}

class Input extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { labelText, referance, err, msg } = this.props;

    return (
      <>
        <label
          htmlFor="inp"
          className="inp"
          style={
            err
              ? { marginBottom: '5px', borderBottom: '2px solid #d8000c' }
              : {}
          }
        >
          <input
            ref={referance}
            autoComplete="new-password"
            type="text"
            id="inp"
            placeholder="&nbsp;"
          />
          <span className="label">
            {labelText}
            <sup>*</sup>
          </span>
          <span className="focus-bg" />
        </label>
        {err ? <div className="error-block">{msg}</div> : ''}
      </>
    );
  }
}

export default Input;
