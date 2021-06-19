import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const HeroBar = ({ className }) => {
  const classes = classnames(styles.wrapper, className);
  return (
    <div className={classes}>
      <div className={styles.text}>skins in the game</div>
      <div className={styles.text}>espa esports for mona</div>
      <div className={styles.text}>matic layer 2 sustainability</div>
    </div>
  );
};

export default HeroBar;
