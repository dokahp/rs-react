import React from 'react';
import './select.css';

interface Props {
  referance: React.RefObject<HTMLSelectElement>;
}

class Select extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { referance } = this.props;
    return (
      <select className="select" defaultValue="default" ref={referance}>
        <option value="Video">Video</option>
        <option value="Stream">Stream</option>
        <option value="default" hidden>
          Select video type<sup>*</sup>
        </option>
      </select>
    );
  }
}

export default Select;
