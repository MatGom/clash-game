import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, theme, size }) => {
  const getSizeClass = size => {
    switch (size) {
      case 'extra-small':
        return styles.buttonExtraSmall;
      case 'small':
        return styles.buttonSmall;
      case 'medium':
        return styles.buttonMedium;
      case 'large':
        return styles.buttonLarge;
      default:
        return '';
    }
  };

  return (
    <button className={`${styles.button} ${styles[theme]} ${getSizeClass(size)}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
