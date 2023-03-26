import React from 'react';
import './checkbox.css';

interface Props {
  referance: React.RefObject<HTMLInputElement>;
  description: string;
  err: boolean;
  msg: string;
}

class Checkbox extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { referance, description, err, msg } = this.props;
    return (
      <>
        <label
          htmlFor="checkbox"
          className="checkbox-label"
          style={err ? { marginBottom: '5px' } : {}}
        >
          <input
            id="checkbox"
            type="checkbox"
            ref={referance}
            className="checkbox-input"
          />
          {description}
        </label>
        {err ? <div className="error-block">{msg}</div> : ''}
      </>
    );
  }
}

export default Checkbox;
