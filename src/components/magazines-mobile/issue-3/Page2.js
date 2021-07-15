import React from 'react';
import styles from './page2.module.scss';

const Page2 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/03_04/image3.png" className={styles.image3}/>  
      <p className={styles.text1}>Abductive Reasoning.</p>         
      <p className={styles.text2}>Have you ever experienced one of thos days where time moves different?</p>  
    </div>
  );
};

export default Page2;
