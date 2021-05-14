import React, { memo, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import styles from './styles.module.scss';
import BottomLine from '@components/bottom-line';
import Link from 'next/link';

const LandingPage = () => {
  const router = useRouter();
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
          <div className={styles.header}> DIGIFIZZY </div>
          <div className={styles.subTitle}> Mod the Metaverse </div>
          <div className={styles.magazineWrapper}>
            <img className={styles.mainMagazine} src="/images/nft/main_magazine.png" onClick={() => {
              router.push('/magazines/1');
            }} />
          </div>
        </div>
        <BottomLine transparent={false} />
      </div>
    </>
  );
};

export default memo(LandingPage);
