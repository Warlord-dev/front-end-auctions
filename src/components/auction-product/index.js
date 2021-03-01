import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { create2KURL } from '@services/imgix.service';
import { getImageForCardProduct } from '@helpers/photo.helpers';
import { useTokenInfo } from '@hooks/token.info.hooks';
import ImportantAuctionInformation from '@containers/important-auction-information';

import styles from './styles.module.scss';

const CardProduct = ({ name, auction, auctionId }) => {
  if (!auction || auctionId === -1) {
    return null;
  }

  const garment = useMemo(() => auction.topGarment, [auction]);

  const tokenInfo = useTokenInfo(garment.tokenUri, [garment.tokenUri]);

  const [imageUrl, isVideo] = getImageForCardProduct(tokenInfo);

  return (
    <li className={cn(styles.item)}>
      <Link href={`/auctions/${auctionId}`}>
        <a className={styles.clothesName}>{name}</a>
      </Link>
      <SmallPhotoWithText
        className={styles.designerWrapper}
        name="Digitalax"
        photo="/images/logo.jpg"
      />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href={`/auctions/${auctionId}`}>
            <a className={styles.clothesPhotoWrapper}>
              {auctionId === 5 && (
                <span className={styles.banner}>
                  <span className={styles.bannerText}>Live Now</span>
                  <span className={styles.gap} />
                </span>
              )}
              {parseInt(garment.id, 10) >= 20 && parseInt(garment.id, 10) <= 28 && (
                <video autoPlay muted loop className={styles.clothesPhoto}>
                  <source src={`/video/${garment.id}.mp4`} type="video/mp4" />
                </video>
              )}
              {(parseInt(garment.id, 10) < 20 || parseInt(garment.id, 10) > 28) &&
                (tokenInfo && imageUrl ? (
                  isVideo ? (
                    <video autoPlay muted loop className={styles.clothesPhoto} key={imageUrl}>
                      <source src={imageUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      className={styles.clothesPhoto}
                      src={create2KURL(imageUrl)}
                      alt={garment.id}
                    />
                  )
                ) : null)}
            </a>
          </Link>
        </div>

        <ImportantAuctionInformation auction={auction} auctionId={auctionId} />
      </div>
    </li>
  );
};

CardProduct.propTypes = {
  auction: PropTypes.object.isRequired,
  name: PropTypes.string,
  auctionId: PropTypes.number,
};

CardProduct.defaultProps = {
  name: '',
  auctionId: -1,
};

export default CardProduct;
