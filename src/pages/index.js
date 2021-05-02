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
        <img className={styles.header} src="/images/homepage_header.png" alt="homepage header" />
        <div className={styles.title}>
          <span>Mod the metaverse</span>
        </div>
        <div className={styles.panel}>
          <img className={styles.new} src="/images/homepage_new.png" alt="homepage new" />
          <img className={styles.meta} src="/images/homepage_meta.png" alt="homepage meta" />
        </div>
      </div>
      <BottomLine transparent={false} />
    </>
  );
};

export default memo(LandingPage);
