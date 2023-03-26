import React from 'react';
import './switch.css';

interface Props {
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  isOn: boolean;
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
      <label
        htmlFor="react-switch-new"
        className="label"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <input
          ref={reference}
          name={name}
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
        {isOn ? (
          <div className="description">Yes, this video is for kids.</div>
        ) : (
          <div className="description">No, this video is not for children.</div>
        )}
      </label>
    );
  }
}

export default Switch;
