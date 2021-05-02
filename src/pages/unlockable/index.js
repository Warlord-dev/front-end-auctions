import React, { memo } from 'react';
import BottomLine from '@components/bottom-line';
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Unlockable = () => {
	return (
		<div className={styles.mainWrapper}>
			<Carousel showThumbs={false}>
				<div>
					<img src="images/slide1.png" />
				</div>
			</Carousel>
			<div className={styles.wrapper}>
				<img className={styles.unlockable} src="/images/unlockable_nft_content.png" alt="unlockable nft content" />
				<div className={styles.panels}>
					<div className={styles.panel}>
					</div>
					<div className={styles.panel}>
					</div>
					<div className={styles.panel}>
					</div>
				</div>
			</div>
			<BottomLine transparent={true} />
		</div>
	);
};

export default memo(Unlockable);
