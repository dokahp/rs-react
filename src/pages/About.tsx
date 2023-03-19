import React from 'react';

class About extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>About Project</h3>
        <p>This project would be a Beta version of youtube! &#128513; </p>
      </div>
    );
  }
}

export default About;
