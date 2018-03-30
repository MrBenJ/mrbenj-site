import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

export default function FullscreenLayout({ children }) {
  return (
    <div className={style.fslayout}>
      {children}
    </div>
  );
}

FullscreenLayout.propTypes = {
  children: PropTypes.any
};
