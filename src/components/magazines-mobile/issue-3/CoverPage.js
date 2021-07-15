import React from 'react';
import styles from './coverpage.module.scss';

const CoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.back} src="/magazine/3/images/cover/image2.png"/>
      <img className={styles.mark} src="/magazine/3/images/cover/image3.png"/>
      <img className={styles.img1} src="/magazine/3/images/cover/image4.png"/>
      <img className={styles.img2} src="/magazine/3/images/cover/image_2021_07_01T03_00_17_291Z.png"/>
      <img className={styles.img3} src="/magazine/3/images/cover/image5.png"/>
      <img className={styles.img4} src="/magazine/3/images/cover/image_2021_07_01T03_00_34_055Z.png"/>
      <img className={styles.img5} src="/magazine/3/images/cover/image_2021_07_01T03_00_44_995Z.png"/>
      <p className={styles.txt21}>OPYN
        DEFI
        OPTIONS 
      </p>
      <p className={styles.txt22}>POLYGON & <br/><span className={styles.text27}>Interest earning assets</span></p>
      <p className={styles.txt23}>RARI& DAOS</p>
      <p className={styles.txt24}>Is the Ownership Economy already here?</p>
      <p className={styles.txt25}>Bitcoin Maxis & the Future of Decentralisation</p>
      <p className={styles.txt26}>MERGING FASHION X DEFI </p>
      <img className={styles.img6} src="/magazine/3/images/cover/image1.png"/>
    </div>
  );
};

export default CoverPage;
