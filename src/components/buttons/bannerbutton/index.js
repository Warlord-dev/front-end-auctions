import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const NewButton = ({ onClick, text, className, disable = false }) => {
  const classes = classnames(styles.button, className);
  return (
    <>
      <button type="button" className={classes} onClick={onClick} disabled={disable}>
        <img src="./images/metaverse/bannerbtn.png" />
        <span> {text} </span>
      </button>
    </>
  );
};

export default NewButton;
