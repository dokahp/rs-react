import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Not Found</h1>
        <Link to="/">GO HOME</Link>
      </>
    );
  }
}

export default NotFound;
