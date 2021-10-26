import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import kebabCase from 'lodash.kebabcase';
import ImportantProductInformation from '@containers/important-product-information';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getDesignerInfoByName } from '@selectors/designer.selectors';
import { getCardProductChartOptions } from '@services/graph.service';
import { getImageForCardProduct } from '@helpers/photo.helpers';
import { PRODUCTS } from '@constants/router-constants';
import { EXCLUSIVE_RARITY, COMMON_RARITY, SEMI_RARE_RARITY } from '@constants/global.constants';

import styles from './styles.module.scss';

const CardProduct = ({
  collectionId,
  history,
  auctionId,
  auctionIndex,
  garmentId,
  garment,
  tabIndex,
  className,
  showGraphIds,
  setShowGraphIds,
}) => {
  const TABS = [EXCLUSIVE_RARITY, SEMI_RARE_RARITY, COMMON_RARITY];
  const COLORS = [styles.color1, styles.color2, styles.color3];
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(0)

  const options = getCardProductChartOptions(history);

  if (!garment) {
    return null;
  }

  const designerInfo = useSelector(
    getDesignerInfoByName(
      tabIndex === 3
        ? 'Digitalax'
        : collectionId === '1'
        ? 'Cosmos'
        : garment.attributes && garment.attributes[0]
        ? garment.attributes[0].value
        : '',
      true,
    ),
  );

  const isLinkAvailable = garmentId !== undefined
    && auctionIndex !== undefined
    && auctionId !== undefined

  const photoWrapper = () => {
    return (
      <a className={styles.clothesPhotoWrapper}>
        <span className={cn(styles.garmentTypeWrapper, COLORS[tabIndex])}>
          <span className={styles.bannerText}>{TABS[tabIndex]}</span>
          <span className={styles.gap} />
        </span>
        {parseInt(garment.id, 10) >= 20 && parseInt(garment.id, 10) <= 28 && (
          <video autoPlay muted loop className={styles.clothesPhoto}>
            <source src={`/video/${garment.id}.mp4`} type="video/mp4" />
          </video>
        )}
        {(parseInt(garment.id, 10) < 20 || parseInt(garment.id, 10) > 28) &&
          (imageUrl ? (
            isVideo ? (
              <LazyLoad>
                <video autoPlay muted loop className={styles.clothesPhoto} key={imageUrl}>
                  <source
                    src={imageUrl.replace('gateway.pinata', 'digitalax.mypinata')}
                    type="video/mp4"
                  />
                </video>
              </LazyLoad>
            ) : (
              <div className={styles.clothesPhotoSubWrapper}>
                <Image
                  className={styles.clothesPhoto}
                  src={imageUrl.replace('gateway.pinata', 'digitalax.mypinata')}
                  alt={garment.id}
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            )
          ) : null)}
        {collectionId === '1' && !garment.id ? (
          <LazyLoad>
            <video
              autoPlay
              muted
              loop
              className={styles.clothesPhoto}
              key={garment.animation_url}
            >
              <source
                src={garment.animation_url.replace('gateway.pinata', 'digitalax.mypinata')}
                type="video/mp4"
              />
            </video>
          </LazyLoad>
        ) : null}
      </a>
    )
  }

  const [imageUrl, isVideo] = getImageForCardProduct(garment);
  return (
    <li className={cn(styles.item, className)}>
      { isLinkAvailable ? <Link
        href={`${PRODUCTS}${collectionId}/${garmentId}/${auctionIndex}/${auctionId}${tabIndex}`}
      > 
        <a className={styles.clothesName}>{garment.name ? garment.name : `ID:${garment.id}`}</a>
      </Link>
      : <a className={styles.clothesName}>{garment.name ? garment.name : `ID:${garment.id}`}</a>
      }
      <SmallPhotoWithText
        className={styles.designerWrapper}
        id={designerInfo ? kebabCase(designerInfo.designerName) : ''}
        name={designerInfo?.designerName}
        photo={designerInfo?.designerPhoto || ''}
        photoIsLink
      />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          { isLinkAvailable ? <Link
            href={isLinkAvailable ? `${PRODUCTS}${collectionId}/${garmentId}/${auctionIndex}/${auctionId}${tabIndex}` : ''}
          >
            {
              photoWrapper()
            }
          </Link>
          : photoWrapper()
          }
          {isOpen && (
            <div className={cn(styles.chart, { [styles.chartActive]: isOpen })}>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          )}
          {tabIndex === 0 && (
            <button
              onClick={() => {
                if (!showGraphIds.includes(garment.id)) {
                  setShowGraphIds([...showGraphIds, garment.id]);
                } else {
                  setShowGraphIds(showGraphIds.filter((id) => id !== garment.id));
                }
                setIsOpen(!isOpen);
              }}
              className={cn(styles.triangle, { [styles.triangleActive]: isOpen })}
            >
              <img src="/images/icons/triangle.svg" alt="triangle" className={styles.triangleImg} />
            </button>
          )}
        </div>
        <ImportantProductInformation
          collectionId={collectionId}
          garment={garment}
          garmentId={garmentId}
          auctionIndex={auctionIndex}
          auctionId={auctionId}
          tabIndex={tabIndex}
        />
      </div>
    </li>
  );
};

CardProduct.propTypes = {
  auctionId: PropTypes.string,
  garment: PropTypes.object.isRequired,
  tabIndex: PropTypes.number.isRequired,
  history: PropTypes.array,
  className: PropTypes.string,
  showGraphIds: PropTypes.array,
  setShowGraphIds: PropTypes.func,
};

CardProduct.defaultProps = {
  tabIndex: 0,
  className: '',
  history: [],
  showGraphIds: [],
  setShowGraphIds: () => {},
};

export default CardProduct;
