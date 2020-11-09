import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ImportantProductInformation from '@containers/important-product-information';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { PRODUCTS } from '@constants/router-constants';
import styles from './styles.module.scss';

const CardProduct = ({
  clothesId, className, clothesName, clothesPhotos, priceEth,
  estimateApy, chartImage, expirationDate, designerId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const designersInfo = useSelector((state) => state.designersInfo.toJS());

  const clothesPhoto = clothesPhotos.find(({ isMain }) => isMain);
  const CURRENT_DESIGNER_INFO = designersInfo.find((item) => item?.designerId === designerId);

  return (
    <li className={cn(styles.item, className)}>
      <Link href={`${PRODUCTS}${clothesId}`}>
        <a className={styles.clothesName}>{clothesName}</a>
      </Link>
      <SmallPhotoWithText {...CURRENT_DESIGNER_INFO} />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href={`${PRODUCTS}${clothesId}`}>
            <a className={styles.clothesPhotoWrapper}>
              <img className={styles.clothesPhoto} src={clothesPhoto?.image} alt={clothesName} />
            </a>
          </Link>
          <img className={cn(styles.chart, { [styles.chartActive]: isOpen })} src={chartImage} alt="chart" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(styles.triangle, { [styles.triangleActive]: isOpen })}
            alt="triangle"
          />
        </div>
        <ImportantProductInformation
          clothesId={clothesId}
          priceEth={priceEth}
          estimateApy={estimateApy}
          expirationDate={expirationDate}
        />
      </div>
    </li>
  );
};


CardProduct.propTypes = {
  className: PropTypes.string,
  clothesId: PropTypes.string,
  clothesName: PropTypes.string,
  designerId: PropTypes.string,
  clothesPhotos: PropTypes.array,
  priceEth: PropTypes.number,
  estimateApy: PropTypes.number,
  chartImage: PropTypes.string,
  expirationDate: PropTypes.string,
};

CardProduct.defaultProps = {
  className: '',
  clothesId: '',
  clothesName: '',
  designerId: '',
  clothesPhotos: [],
  priceEth: null,
  estimateApy: null,
  chartImage: '',
  expirationDate: '',
};


export default CardProduct;
