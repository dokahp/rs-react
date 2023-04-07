import React from 'react';
import './Loading.css';
import { ReactComponent as Spinner } from './loading.svg';

function Loading() {
  return (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  );
}

export default Loading;
