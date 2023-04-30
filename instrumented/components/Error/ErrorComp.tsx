import React from 'react';
import './error.css';

function ErrorComp({ error }: { error: boolean }) {
  if (!error) return null;
  return (
    <div className="error-wrapper">
      <div className="error">
        <div className="icon">⚠️</div>
        403. Forbidden
        <br />
        Reason: You have reached the maximum number of requests per day
      </div>
    </div>
  );
}

export default ErrorComp;
