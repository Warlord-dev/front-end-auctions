import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const NewButton = ({ onClick, text, className, disable = false, mode = 0 }) => {
  const classes = classnames(styles.button, className);
  return (
    <>
      <button type="button" className={classes} onClick={onClick} disabled={disable}>
        <img
          src={
            mode === 0 ? './images/metaverse/pinkb.png' : './images/metaverse/red_price_card.png'
          }
        />
        <span> {text} </span>
      </button>
    </>
  );
};

export default NewButton;
