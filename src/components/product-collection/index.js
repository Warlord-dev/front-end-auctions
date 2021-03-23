import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SmallPhotoWithText from '@components/small-photo-with-text';
import kebabCase from 'lodash.kebabcase';
import { create2KURL } from '@services/imgix.service';
import { getImageForCardProduct } from '@helpers/photo.helpers';
import { useTokenInfo } from '@hooks/token.info.hooks';
import { getDesignerInfoByName } from '@selectors/designer.selectors';
import ImportantCollectionInformation from '@containers/important-collection-information';

import styles from './styles.module.scss';

const CardProduct = ({ collection }) => {
  const tokenInfo = useTokenInfo(collection.image, [collection.image]);
  const designerInfo = useSelector(getDesignerInfoByName(collection.designer, true));
  // console.log('---token', tokenInfo);
  const [imageUrl, isVideo] =
    collection.id === 2
      ? [tokenInfo ? tokenInfo.animation : '', true]
      : getImageForCardProduct(tokenInfo);
  return (
    <li className={cn(styles.item)}>
      <Link href={`/collections/${collection.id}`}>
        <a className={styles.clothesName}>{collection.text}</a>
      </Link>
      <SmallPhotoWithText
        className={styles.designerWrapper}
        id={designerInfo ? kebabCase(designerInfo.designerName) : ''}
        name={designerInfo?.designerName}
        photo={designerInfo?.designerPhoto}
        photoIsLink
      />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          {imageUrl && (
            <Link href={`/collections/${collection.id}`}>
              <a className={styles.clothesPhotoWrapper}>
                {isVideo ? (
                  <video autoPlay muted loop className={styles.clothesPhoto} key={imageUrl}>
                    <source src={imageUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className={styles.clothesPhoto}
                    src={create2KURL(imageUrl)}
                    alt={collection.id}
                  />
                )}
              </a>
            </Link>
          )}
        </div>

        <ImportantCollectionInformation collection={collection} />
      </div>
    </li>
  );
};

CardProduct.propTypes = {
  collection: PropTypes.object.isRequired,
};

CardProduct.defaultProps = {};

export default CardProduct;
