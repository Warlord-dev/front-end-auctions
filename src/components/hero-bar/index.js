import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const HeroBar = ({ className }) => {
  const classes = classnames(styles.wrapper, className);
  return (
    <div className={classes}>
      <img src="/images/metaverse/viewallskinsbg.png" className={styles.back} />
    </div>
  );
};

export default HeroBar;
