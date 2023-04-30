import React from 'react';
import './Loading.css';
import { ReactComponent as Spinner } from './loading.svg';

interface LoadingProps {
  isLoading: boolean;
}

function Loading({ isLoading }: LoadingProps) {
  if (!isLoading) return null;
  return (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  );
}

export default Loading;
