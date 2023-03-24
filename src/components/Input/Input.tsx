import React from 'react';
import './input.css';

interface Props {
  referance: React.RefObject<HTMLInputElement>;
  labelText: string;
}

class Input extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { labelText, referance } = this.props;
    return (
      <label htmlFor="inp" className="inp">
        <input ref={referance} type="text" id="inp" placeholder="&nbsp;" />
        <span className="label">{labelText}</span>
        <span className="focus-bg" />
      </label>
    );
  }
}

export default Input;
