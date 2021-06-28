import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const HeroBar = ({ className }) => {
  const classes = classnames(styles.wrapper, className);
  return (
    <div className={classes}>
      <div className={styles.animationForm}>
        <div className={styles.node}>
          <div className={styles.text}>skins in the game</div>
          <div className={styles.text}>espa esports for mona</div>
          <div className={styles.text}>matic layer 2 sustainability</div>
        </div>
        <div className={styles.node}>
          <div className={styles.text}>skins in the game</div>
          <div className={styles.text}>espa esports for mona</div>
          <div className={styles.text}>matic layer 2 sustainability</div>
        </div>
        <div className={styles.node}>
          <div className={styles.text}>skins in the game</div>
          <div className={styles.text}>espa esports for mona</div>
          <div className={styles.text}>matic layer 2 sustainability</div>
        </div>
        <div className={styles.node}>
          <div className={styles.text}>skins in the game</div>
          <div className={styles.text}>espa esports for mona</div>
          <div className={styles.text}>matic layer 2 sustainability</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBar;
