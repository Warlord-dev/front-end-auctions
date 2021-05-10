import React, { memo, useEffect } from 'react';
import Router from 'next/router';
import styles from './styles.module.scss';
import BottomLine from '@components/bottom-line';

const LandingPage = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('485692459240447');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bodyWrapper}>
          <img className={styles.header} src="/images/nft/homepage_header.png" alt="homepage header" />
          <img className={styles.subTitle} src="/images/nft/homepage_sub_title.png" alt="homepage new" />
          <div className={styles.flexDiv}>
            <img className={styles.mainMagazine} src="/images/nft/main_magazine.png" />
          </div>
        </div>
        <BottomLine transparent={false} />
      </div>
    </>
  );
};

export default memo(LandingPage);
