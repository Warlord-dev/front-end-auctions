import React, { memo, useEffect, useState } from 'react';
import BottomLine from '@components/bottom-line';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';
import api from '@services/api/api.service';
import { useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';

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
      console.log(digitalaxSubscriptionCollectors);
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
    if (!collectionIds.filter((collectionId) => parseInt(collectionId) === id).length) {
      onUnlockableDetails(id);
    } else {
      window.alert('This item is already puchased.');
    }
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
            <div className={styles.overlay}>
              <button type="button" onClick={() => onUnlock(1)}>
                {' '}
                COMMON UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.overlay}>
              <button type="button" onClick={() => onUnlock(2)}>
                {' '}
                SEMI-RARE UNLOCK{' '}
              </button>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.overlay}>
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
