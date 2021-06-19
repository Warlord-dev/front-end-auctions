import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const NewButton = ({ onClick, text, className }) => {
  const classes = classnames(styles.button, className);
  return (
    <>
      <button type="button" className={classes} onClick={onClick}>
        <img src="./images/metaverse/pinkb.png" />
        <span> {text} </span>
      </button>
    </>
  );
};

export default NewButton;
