import React, { memo } from 'react';
import BottomLine from '@components/bottom-line';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';

const Unlockable = () => {
  const router = useRouter();

  const onUnlockableDetails = (id) => {
    router.push(`/purchase/${id}`);
  }

	return (
		<div className={styles.mainWrapper}>
			<NftBanners />
			<div className={styles.wrapper}>
				<img className={styles.unlockable} src="/images/nft/unlockable_nft_content.png" alt="unlockable nft content" />
				<div className={styles.panels}>
					<div className={styles.panel}>
						<div className={styles.overlay}> 
							<button type="button" onClick={() => onUnlockableDetails(1)}> COMMON UNLOCK </button>
						</div>
					</div>
					<div className={styles.panel}>
						<div className={styles.overlay}>
							<button type="button" onClick={() => onUnlockableDetails(2)}> SEMI-RARE UNLOCK </button>
						</div>
					</div>
					<div className={styles.panel}>
						<div className={styles.overlay}>
							<button type="button" onClick={() => onUnlockableDetails(3)}> EXCLUSIVE UNLOCK </button>
						</div>
					</div>
				</div>
			</div>
			<BottomLine transparent={true} />
		</div>
	);
};

export default memo(Unlockable);
