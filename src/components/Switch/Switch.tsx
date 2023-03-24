import React from 'react';
import './switch.css';

interface Props {
  name: string;
  isOn: boolean;
  reference: React.RefObject<HTMLInputElement>;
  handleSwitch: () => void;
}

class Switch extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reference, name, isOn, handleSwitch } = this.props;
    return (
      <>
        <input
          ref={reference}
          name={name}
          checked={isOn}
          onChange={handleSwitch}
          className="react-switch-checkbox"
          id="react-switch-new"
          type="checkbox"
        />
        <label
          style={{ backgroundColor: isOn ? '#06D6A0' : '#808080' }}
          className="react-switch-label"
          htmlFor="react-switch-new"
        >
          <span className="react-switch-button" />
        </label>
      </>
    );
  }
}

export default Switch;
