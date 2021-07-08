import React from 'react';
import styles from './coverpage.module.scss';
const CoverPage = () => {
  return (
    <div className={styles.wrapper}>         
        <img src="/magazine/3/images/cover/image_2021_07_01T02_47_18_709Z.png" width="960" />
        <img className={styles.img1} src="/magazine/3/images/cover/image_2021_07_01T03_00_06_483Z.png"/>
        <img className={styles.img2} src="/magazine/3/images/cover/image_2021_07_01T03_00_17_291Z.png"/>
        <img className={styles.img3} src="/magazine/3/images/cover/image_2021_07_01T03_00_26_613Z.png"/>
        <img className={styles.img4} src="/magazine/3/images/cover/image_2021_07_01T03_00_34_055Z.png"/>
        <img className={styles.img5} src="/magazine/3/images/cover/image_2021_07_01T03_00_44_995Z.png"/>
        <p className={styles.txt21}>OPYN
          DEFI
          OPTIONS 
        </p>
        <p className={styles.txt22}>POLYGON & Interest earning assets</p>
        <p className={styles.txt23}>RARI& DAOS</p>
        <p className={styles.txt24}>Is the Ownership Economy already here?</p>
        <p className={styles.txt25}>Bitcoin Maxis & the Future of Decentralisation</p>
        <p className={styles.txt26}>MERGING FASHION X DEFI </p>
    </div>
  );
};

export default CoverPage;