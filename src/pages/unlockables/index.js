import React, { memo } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import NftBanners from '@components/nft-banners';

const Unlockables = () => {
  const router = useRouter();

  return (
    <div className={styles.mainWrapper}>
      <NftBanners />
    </div>
  );
};

export default Unlockables;
