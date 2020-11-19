import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import ImportantProductInformation from '@containers/important-product-information';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { getDesignerInfoById } from '@selectors/designer.selectors';
import { getCardProductChartOptions } from '@services/graph.service';
import { create2KURL } from '@services/imgix.service';
import { PRODUCTS } from '@constants/router-constants';
import { useTokenInfo } from '@hooks/token.info.hooks';

import styles from './styles.module.scss';

const CardProduct = ({
  history, garment, className,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const options = getCardProductChartOptions(history);

  if (!garment) {
    return null;
  }

  const tokenInfo = useTokenInfo(garment.tokenUri, [garment.tokenUri]);

  const designerInfo = useSelector(getDesignerInfoById(garment.designer));

  return (
    <li className={cn(styles.item, className)}>
      <Link href={`${PRODUCTS}${garment.id}`}>
        <a className={styles.clothesName}>{tokenInfo && tokenInfo.name ? tokenInfo.name : `ID:${garment.id}`}</a>
      </Link>
      <SmallPhotoWithText id={designerInfo ? designerInfo.id : ''} name={designerInfo?.designerName} photo={designerInfo?.designerPhoto} />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href={`${PRODUCTS}${garment.id}`}>
            <a className={styles.clothesPhotoWrapper}>
              {tokenInfo ? <img className={styles.clothesPhoto} src={create2KURL(tokenInfo.image)} alt={garment.id} /> : null}
            </a>
          </Link>
          {isOpen && (
            <div className={cn(styles.chart, { [styles.chartActive]: isOpen })}>
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
              />
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(styles.triangle, { [styles.triangleActive]: isOpen })}
            alt="triangle"
          />
        </div>
        <ImportantProductInformation
          clothesId={garment.id}
        />
      </div>
    </li>
  );
};


CardProduct.propTypes = {
  garment: PropTypes.object.isRequired,
  history: PropTypes.array,
  className: PropTypes.string,
};

CardProduct.defaultProps = {
  className: '',
  history: [],
};


export default CardProduct;
