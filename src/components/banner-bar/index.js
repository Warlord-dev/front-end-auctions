import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const HeroBar = ({ className }) => {
  const classes = classnames(styles.wrapper, className);
  return (
    <div className={classes}>
      <div className={styles.animationForm}>
        <div className={styles.node}>
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
        </div>
        <div className={styles.node}>
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
        </div>
        <div className={styles.node}>
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
        </div>
        <div className={styles.node}>
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
          <img src="./images/metaverse/web3fashion.png" className={styles.toptext} />
        </div>
      </div>
    </div>
  );
};

export default HeroBar;
