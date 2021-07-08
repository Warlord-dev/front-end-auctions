import React, { useRef, useState } from 'react';
import styles from './page3334.module.scss';

const Page3334 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <video className={styles.image4} muted loop autoPlay>
          <source src="./magazine/3/images/33_34/video1.mp4" type="video/mp4" />
        </video>
      </div> 
      <img src="/magazine/3/images/33_34/image2.png" className={styles.image2}/>   
      <img src="/magazine/3/images/33_34/image3.png" className={styles.image3}/>   
      <p className={styles.text1}>SUSTAINABILITY PIONEERS</p>   
    </div>
  );
};

export default Page3334;
