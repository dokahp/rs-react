import React from 'react';
import './styles/notfound.css';

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div>
        <h1 className="not-found-heading">404</h1>
        <div className="first-line-wrapper">
          <div className="error404">Error404</div>
          <div className="white-color">&nbsp;(&nbsp;) &#123;</div>
        </div>
        <div className="seconds-line-wrapper flex">
          <div className="red-color"> message &nbsp; </div>
          <div className="white-color">= &nbsp;</div>
          <div className="white-color">&quot;</div>
          <div className="green-color">page not found</div>
          <div className="white-color">&quot;</div>
          <div className="white-color">;</div>
        </div>
        <div className="flex white-color">&#125;;</div>
      </div>
    </div>
  );
}

export default NotFound;
