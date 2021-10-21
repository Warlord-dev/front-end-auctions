import React, { memo, useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import styles from './styles.module.scss';
import BottomLine from '@components/bottom-line';
import api from '@services/api/api.service';
import { getAccount } from '@selectors/user.selectors';
import globalActions from '@actions/global.actions';
import { useDispatch, useSelector } from 'react-redux';

const LandingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const account = useSelector(getAccount);

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

  useEffect(() => {
    const fetchDigitalaxSubscriptionCollectors = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      if (
        digitalaxSubscriptionCollectors[0] &&
        digitalaxSubscriptionCollectors[0].parentsOwned.length
      ) {
        dispatch(globalActions.setContentUnlocked(true));
      }
    };

    fetchDigitalaxSubscriptionCollectors();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.bodyWrapper}>
          <div className={styles.header}> DIGIFIZZY </div>
          <div className={styles.subTitle}> Mod the Metaverse </div>
          <div className={styles.magazineWrapper}>
            <img
              className={styles.mainMagazine}
              src="/images/nft/6/main.png"
              onClick={() => {
                router.push('/magazines/6');
              }}
            />
          </div>
        </div>
        <BottomLine transparent={false} />
      </div>
    </>
  );
};

export default memo(LandingPage);
