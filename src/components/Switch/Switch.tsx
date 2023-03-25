import React from 'react';
import './switch.css';

interface Props {
  name: string;
  reference: React.RefObject<HTMLInputElement>;
}

interface State {
  switcher: {
    isOn: boolean;
  };
}

class Switch extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state = {
      switcher: {
        isOn: false,
      },
    };
  }

  handleSwitch() {
    return this.setState((state: State) => {
      return { switcher: { isOn: !state.switcher.isOn } };
    });
  }

  render() {
    const { reference, name } = this.props;
    const { switcher } = this.state;
    return (
      <label
        htmlFor="react-switch-new"
        className="label"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <input
          ref={reference}
          name={name}
          onChange={this.handleSwitch}
          className="react-switch-checkbox"
          id="react-switch-new"
          type="checkbox"
        />
        <label
          style={{ backgroundColor: switcher.isOn ? '#06D6A0' : '#808080' }}
          className="react-switch-label"
          htmlFor="react-switch-new"
        >
          <span className="react-switch-button" />
        </label>
        {switcher.isOn ? (
          <div className="description">Yes, this video is for kids.</div>
        ) : (
          <div className="description">No, this video is not for children.</div>
        )}
      </label>
    );
  }
}

export default Switch;
