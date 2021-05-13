import React, { memo, useCallback, useEffect, useState } from 'react';
import BottomLine from '@components/bottom-line';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';
import api from '@services/api/api.service';
import { useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import details from '@constants/nft_subscription_issue1';

const Unlockable = () => {
  const router = useRouter();
  const account = useSelector(getAccount);
  const [collectionIds, setCollectionIds] = useState([]);

  const onUnlockableDetails = (id) => {
    router.push(`/purchase/${id}`);
  };

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      const ids = [];
      for (let i = 0; i < digitalaxSubscriptionCollectors.length; i += 1) {
        for (let j = 0; j < digitalaxSubscriptionCollectors[i].parentsOwned.length; j += 1) {
          const {
            digitalaxSubscriptionPurchaseHistory,
          } = await api.getDigitalaxSubscriptionPurchase(
            digitalaxSubscriptionCollectors[i].parentsOwned[j].id
          );
          if (!ids.includes(digitalaxSubscriptionPurchaseHistory.bundleId))
            ids.push(digitalaxSubscriptionPurchaseHistory.bundleId);
        }
      }
      setCollectionIds(ids);
    };

    fetchSubscriptionStatus();
  }, []);

  const onUnlock = (id) => {
    onUnlockableDetails(id);
  };

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.wrapper}>
        <div className={styles.mainText}>
          UNLOCKABLE NFT BUNDLES
        </div>
        <div className={styles.panels}>
          <div className={styles.panel}>
            <video loop autoPlay muted className={styles.thumbnail} src={details[0].url[0]}>
            </video>
            <div className={`${styles.overlay} ${styles.overlay1}`}>
              <button type="button" onClick={() => onUnlock(1)}>
                {' '}
                COMMON UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <video loop autoPlay muted className={styles.thumbnail} src={details[1].url[0]}>
            </video>
            <div className={`${styles.overlay} ${styles.overlay2}`}>
              <button type="button" onClick={() => onUnlock(2)}>
                {' '}
                SEMI-RARE UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <video loop autoPlay muted className={styles.thumbnail} src={details[2].url[0]}>
            </video>
            <div className={`${styles.overlay} ${styles.overlay3}`}>
              <button type="button" onClick={() => onUnlock(3)}>
                {' '}
                EXCLUSIVE UNLOCK{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomLine transparent={true} />
    </div>
  );
};

export default memo(Unlockable);
