import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ImportantProductInformation from '@containers/important-product-information';
import { getHistoryByTokenId } from '@selectors/history.selectors';
import { prepareGraphHistory } from '@helpers/graph.helpers';
import styles from './styles.module.scss';

const AuctionInformation = ({
  clothesId,
}) => {

  const history = useSelector(getHistoryByTokenId(clothesId));

  const options = {
    title: {
      text: '',
    },
    chart: {
      width: 490,
      height: 100,
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
        lineWidth: 1,
        marker: {
          radius: 3,
          enabled: true,
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null, // inherit from series
        },
        label: {
          enabled: true,
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
      gridLineWidth: 0,
      minorGridLineWidth: 0,
    },
    series: [{
      data: prepareGraphHistory(history),
    }],
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.chartWrapper}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
      <ImportantProductInformation
        clothesId={clothesId}
        styleTypeBlock="largeTransparent"
      />
    </div>
  );
};

AuctionInformation.propTypes = {
  clothesId: PropTypes.string,
};

AuctionInformation.defaultProps = {
  clothesId: '',
};

export default memo(AuctionInformation);
