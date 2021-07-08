import React from 'react';
import styles from './page2930.module.scss';

const Page2930 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSideFrame}></div>
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src="./magazine/1/images/howtogetintext 2.png" />
        <img src="./magazine/1/images/howtogetintext 2.png" />
        <img src="./magazine/1/images/howtogetintext 2.png" />
        <img src="./magazine/1/images/howtogetintext 2.png" />
      </div>
      <div className={styles.rightSideFrame}></div>
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src="./magazine/1/images/howtogetintext 1.png" />
        <img src="./magazine/1/images/howtogetintext 1.png" />
        <img src="./magazine/1/images/howtogetintext 1.png" />
        <img src="./magazine/1/images/howtogetintext 1.png" />
      </div>
      <img src="/magazine/3/images/29_30/image1.png" className={styles.image1}/>
      <img src="/magazine/3/images/29_30/image2.png" className={styles.image2}/>
    </div>
  );
};

export default Page2930;
