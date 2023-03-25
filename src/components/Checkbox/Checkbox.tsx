import React from 'react';
import './checkbox.css';

interface Props {
  referance: React.RefObject<HTMLInputElement>;
  description: string;
}

class Checkbox extends React.PureComponent<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { referance, description } = this.props;
    return (
      <label htmlFor="checkbox" className="checkbox-label">
        <input
          id="checkbox"
          type="checkbox"
          ref={referance}
          className="checkbox-input"
        />
        {description}
      </label>
    );
  }
}

export default Checkbox;
