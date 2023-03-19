import React from 'react';

class NotFound extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          fontSize: '200%',
          fontWeight: '700',
          letterSpacing: '2px',
        }}
      >
        <div>
          <h1
            style={{ color: 'red', textAlign: 'center', letterSpacing: '12px' }}
          >
            404
          </h1>
          <div className="first-line-wrapper" style={{ display: 'flex' }}>
            <div style={{ color: '#a6a6f3' }}>Error404</div>
            <div style={{ color: '#fff' }}>&nbsp;(&nbsp;) &#123;</div>
          </div>
          <div className="seconds-line-wrapper" style={{ display: 'flex' }}>
            <div style={{ color: 'red', marginLeft: '20px' }}>
              {' '}
              message &nbsp;{' '}
            </div>
            <div style={{ color: '#fff' }}>= &nbsp;</div>
            <div style={{ color: '#fff' }}>&quot;</div>
            <div style={{ color: 'green' }}>page not found</div>
            <div style={{ color: '#fff' }}>&quot;</div>
            <div style={{ color: '#fff' }}>;</div>
          </div>
          <div style={{ display: 'flex', color: '#fff' }}>&#125;;</div>
        </div>
      </div>
    );
  }
}

export default NotFound;
