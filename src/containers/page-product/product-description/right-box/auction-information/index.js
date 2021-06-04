import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import cn from 'classnames';
import throttle from 'lodash.throttle';
import HighchartsReact from 'highcharts-react-official';
import ImportantProductInformation from '@containers/important-product-information';
import { getHistoryByTokenId } from '@selectors/history.selectors';
import { getAuctionInformationChartOptions } from '@services/graph.service';
import styles from './styles.module.scss';

const AuctionInformation = ({ garment }) => {
  const history = useSelector(getHistoryByTokenId(garment.id));
  const [options, setOptions] = useState(getAuctionInformationChartOptions(history));

  useEffect(() => {
    setOptions({
      ...options,
      chart: {
        width: calcWidth(window.innerWidth),
      },
    });
    window.onresize = throttle(onResize, 100);
  }, []);

  const calcWidth = (innerWidth) => {
    if (innerWidth >= 1440) {
      return (innerWidth - 85 - 300) / 2 - 120;
    } else if (innerWidth >= 1200) {
      return (innerWidth - 85 - 100) / 2 - 120;
    } else if (innerWidth >= 992) {
      return innerWidth - 100 - 120;
    } else {
      return innerWidth - 40 - 140;
    }
  };

  const onResize = (e) => {
    setOptions({
      ...options,
      chart: {
        width: calcWidth(window.innerWidth),
      },
    });
  };

  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.chartWrapper}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <ImportantProductInformation
        garment={garment}
        auctionId={garment.id}
        styleTypeBlock="largeTransparent"
      />
    </div>
  );
};

AuctionInformation.propTypes = {
  garment: PropTypes.object.isRequired,
};

AuctionInformation.defaultProps = {};

export default memo(AuctionInformation);
