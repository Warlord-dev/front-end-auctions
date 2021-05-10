import React, { memo } from 'react';
import BottomLine from '@components/bottom-line';
import UnlockableDetail from '@components/unlockableDetail';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import NftBanners from '@components/nft-banners';

const Purchase = () => {
  const router = useRouter();
  const { id } = router.query;
  const images = [{
    id: 1,
    url: 'images/skin-sample/espa-skin-1.png',
  }, {
    id: 2,
    url: 'images/skin-sample/espa-skin-2.png',
  }, {
    id: 3,
    url: 'images/skin-sample/espa-skin-3.png',
  }, {
    id: 4,
    url: 'images/skin-sample/espa-skin-4.png',
  }];

  const details = [
    {
      title: 'Common Unlock: Issue One',
      body: `Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides! Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!

      Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!
      
      Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!`,
      price: 0.5
    },
    {
      title: 'Semi-Rare Unlock: Issue One',
      body: `Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides! Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!

      Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!
      
      Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!`,
      price: 1
    },
    {
      title: 'Exclusive Unlock: Issue One',
      body: `Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides! Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!

      Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!
      
      Like your sleeves a little longer? Our Don't Take It Personal Dress has a sheer bodice, a shirred high neckline, full length sleeves and a stretchy shirred panel on the skirt. We love wearing ours with a bronze glow and platform slides!`,
      price: 2
    },
  ];

	return (
		<div className={styles.mainWrapper}>
			<NftBanners />
			<div className={styles.wrapper}>
        <UnlockableDetail images={images} id={id} details={details[id - 1]} />
			</div>
			<BottomLine borderWhite={false} />
		</div>
	);
};

export default memo(Purchase);
