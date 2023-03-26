import React from 'react';
import './snackbar.css';

interface Props {
  text: string;
  className: string;
}

class Snackbar extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, className } = this.props;
    return (
      <div id="snackbar" className={className}>
        {text}
      </div>
    );
  }
}

export default Snackbar;
