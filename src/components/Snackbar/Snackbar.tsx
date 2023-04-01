import React from 'react';
import './snackbar.css';

interface Props {
  text: string;
  className: string;
}

function Snackbar({ text, className }: Props) {
  return (
    <div id="snackbar" className={className}>
      {text}
    </div>
  );
}

export default Snackbar;
