import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Link from 'next/link';
import ImportantProductInformation from '@containers/important-product-information';
import SmallPhotoWithText from '@components/small-photo-with-text';
import { prepareGraphHistory } from '@helpers/graph.helpers';
import { PRODUCTS } from '@constants/router-constants';

import styles from './styles.module.scss';

const CardProduct = ({
  history, garment, designer, className,
}) => {

  const designerPhoto = '/images/Kris-Seed.png';
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    title: {
      text: '',
    },
    chart: {
      height: 105,
      width: 573,
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      type: 'datetime',
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: false,
        },
      },
    },
    yAxis: {
      lineColor: '#BABABA',
      lineWidth: 1,
      title: '',
      labels: {
        formatter(params) {
          return `${params.value}E`;
        },
      },
    },
    series: [{
      data: prepareGraphHistory(history),
    }],
  };

  if (!garment) {
    return null;
  }

  return (
    <li className={cn(styles.item, className)}>
      <Link href={`${PRODUCTS}${garment.id}`}>
        <a className={styles.clothesName}>{garment.id}</a>
      </Link>
      <SmallPhotoWithText id={designer ? designer.id : ''} photo={designerPhoto} />
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Link href={`${PRODUCTS}${garment.id}`}>
            <a className={styles.clothesPhotoWrapper}>
              <img className={styles.clothesPhoto} src={garment.tokenUri} alt={garment.id} />
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
  designer: PropTypes.object.isRequired,
  history: PropTypes.array,
  className: PropTypes.string,
};

CardProduct.defaultProps = {
  className: '',
  history: [],
};


export default CardProduct;
