import React from 'react';
import styles from './styles.module.scss';
import BottomLine from '@components/bottom-line';

const HiddenContent1 = () => {
    const state = 1;

    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.bodyWrapper}>
            <img className={styles.header} src="/images/nft/homepage_header.png" alt="homepage header" />
            <div className={styles.subTitleWrapper}>
              <img className={styles.subTitle} src="/images/nft/homepage_sub_title.png" alt="homepage new" />
            </div>
            <div className={styles.flexDiv}>
              <img className={styles.mainMagazine} src="/images/nft/main_magazine.png" />
            </div>
          </div>
          <BottomLine />
        </div>
      </>
    );
};

export default HiddenContent1;