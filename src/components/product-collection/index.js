import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const designerInfo = useSelector(getDesignerInfoByName(collection.designer, true));

  return (
    <li className={cn(styles.item)}>
      <Link href={collection.id !== 4 ? `/collections/${collection.id}` : `products/4/102799/`}>
        <a className={styles.clothesName}>{collection.text}</a>
      </Link>
      <SmallPhotoWithText
        className={styles.designerWrapper}
        id={designerInfo ? kebabCase(designerInfo.designerName) : kebabCase('Cleora')}
        name={designerInfo?.designerName || 'Cleora'}
        photo={designerInfo?.designerPhoto || '/images/cleoraskin (1) 1.png'}
        photoIsLink
      />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href={collection.id !== 4 ? `/collections/${collection.id}` : `products/4/102799/`}>
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
