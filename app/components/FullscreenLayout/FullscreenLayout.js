import React from 'react';
import style from './style.scss';

export default function FullscreenLayout({ children }) {
  return (
    <div className={style.fslayout}>
      {children}
    </div>
  );
}
