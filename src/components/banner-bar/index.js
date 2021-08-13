import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const HeroBar = ({ className, type }) => {
  const classes = classnames(styles.wrapper, className);
  const classes2 = classnames(styles.wrapper2, className);
  return (
    <>
    {type == 1 &&
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
    }
    {type == 2 &&
      <div className={classes2}>
      <div>
        <div className={styles.node}>
          <img src="./images/metaverse/webfashion.png" className={styles.toptext} />
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default HeroBar;
