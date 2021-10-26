import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SmallPhotoWithText from '@components/small-photo-with-text';
import kebabCase from 'lodash.kebabcase';
import { getDesignerInfoByName } from '@selectors/designer.selectors';
import ImportantCollectionInformation from '@containers/important-collection-information';

import styles from './styles.module.scss';

const CardProduct = ({ collection }) => {
  const designerInfo = useSelector(getDesignerInfoByName(collection.designer, true));

  const getLink = () => {
    if (collection.id === 4) {
      return 'products/4/101075/9/1002943/';
    } else if (collection.id === 2) {
      return 'products/2/1/1/1/';
    } else {
      return `/collections/${collection.id}`;
    }
  };

  return (
    <li className={cn(styles.item)}>
      <Link href={getLink()}>
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
          <Link href={getLink()}>
            <div className={styles.photoWrapper}>
              <a className={styles.clothesPhotoWrapper}>
                <video
                  autoPlay
                  muted
                  loop
                  className={styles.clothesPhoto}
                  key={collection.image.replace('gateway.pinata', 'digitalax.mypinata')}
                >
                  <source
                    src={collection.image.replace('gateway.pinata', 'digitalax.mypinata')}
                    type="video/mp4"
                  />
                </video>
              </a>
            </div>
          </Link>
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
