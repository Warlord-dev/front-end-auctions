import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import kebabCase from 'lodash.kebabcase';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getDesignerInfoByName } from '@selectors/designer.selectors';
import { create2KURL } from '@services/imgix.service';
import { getImageForCardProduct, getDesignerName } from '@helpers/photo.helpers';
import { useTokenInfo } from '@hooks/token.info.hooks';
import ImportantNFTInformation from '@containers/important-nft-information';

import styles from './styles.module.scss';

const NFTProduct = ({ name, nft, nftId }) => {
  if (!nft || nftId === -1) {
    return null;
  }

  const [imageUrl, isVideo] = getImageForCardProduct(nft);
  const designerName = getDesignerName(nft);
  const designerInfo = useSelector(getDesignerInfoByName(designerName, true));
  const nftType = nft.attributes.find(item => item.type === 'Degree of Exclusivity');

  return (
    <li className={cn(styles.item)}>
      <Link href="#">
        <a className={styles.clothesName}>{nft.name}</a>
      </Link>
      <SmallPhotoWithText
        className={styles.designerWrapper}
        id={kebabCase(designerName)}
        name={designerName}
        photo={designerInfo?.designerPhoto}
        photoIsLink
      />
      <div className={cn(styles.card, styles[nftType.value.toLowerCase()])}>
        <div className={styles.cardBody}>
          <div className={styles.imageWrapper}>
            <Link href="#">
              <a className={styles.clothesPhotoWrapper}>
                {imageUrl &&
                  (isVideo ? (
                    <video autoPlay muted loop className={styles.clothesPhoto} key={imageUrl}>
                      <source src={imageUrl.replace('gateway.pinata', 'digitalax.mypinata')} type="video/mp4" />
                    </video>
                  ) : (
                    <img className={styles.clothesPhoto} src={imageUrl.replace('gateway.pinata', 'digitalax.mypinata')} alt={nftId} />
                  ))}
              </a>
            </Link>
          </div>

          <ImportantNFTInformation nft={nft} nftType={nftType} nftId={nftId} />
        </div>
      </div>
    </li>
  );
};

NFTProduct.propTypes = {
  nft: PropTypes.object.isRequired,
  nftId: PropTypes.number,
};

NFTProduct.defaultProps = {
  nftId: -1,
};

export default NFTProduct;
