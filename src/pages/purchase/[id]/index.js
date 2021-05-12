import React, { memo } from 'react';
import BottomLine from '@components/bottom-line';
import UnlockableDetail from '@components/unlockableDetail';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';
import details from '@constants/nft_subscription_issue1'

const Purchase = () => {
  const router = useRouter();
  const { id } = router.query;

	return (
		<div className={styles.mainWrapper}>
			<NftBanners />
			<div className={styles.wrapper}>
        		<UnlockableDetail id={id} details={details[id - 1]} />
			</div>
			<BottomLine borderWhite={false} />
		</div>
	);
};

export default memo(Purchase);
