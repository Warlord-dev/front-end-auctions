import React, { memo, useEffect } from 'react';
import BottomLine from '@components/bottom-line';
import UnlockableDetail from '@components/unlockableDetail';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import api from '@services/api/api.service';
import NftBanners from '@components/nft-banners';
import { details } from '@constants/nft_subscription_issues';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount } from '@selectors/user.selectors';
import globalActions from '@actions/global.actions';

const Purchase = () => {
  const router = useRouter();
  const { issueId, id } = router.query;
  const account = useSelector(getAccount);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDigitalaxSubscriptionCollectors = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      if (
        digitalaxSubscriptionCollectors[0] &&
        digitalaxSubscriptionCollectors[0].parentsOwned.filter((value) =>
          value.name.includes(`DIGIFIZZY ${details[issueId - 1][id - 1].issueIndex}`)
        ).length
      ) {
        dispatch(globalActions.setContentUnlocked(true));
      } else {
        dispatch(globalActions.setContentUnlocked(false));
      }
    };

    fetchDigitalaxSubscriptionCollectors();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
      <div className={styles.wrapper}>
        <UnlockableDetail id={id} details={details[issueId - 1][id - 1]} />
      </div>
      <BottomLine borderWhite={false} />
    </div>
  );
};

export default memo(Purchase);
