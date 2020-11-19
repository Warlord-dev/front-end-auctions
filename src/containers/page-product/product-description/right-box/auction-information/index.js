import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import cn from 'classnames';
import HighchartsReact from 'highcharts-react-official';
import ImportantProductInformation from '@containers/important-product-information';
import { getHistoryByTokenId } from '@selectors/history.selectors';
import { getAuctionInformationChartOptions } from '@services/graph.service';
import styles from './styles.module.scss';

const AuctionInformation = ({
  clothesId,
}) => {

  const history = useSelector(getHistoryByTokenId(clothesId));

  const options = getAuctionInformationChartOptions(history);

  return (
    <div className={cn(styles.wrapper, 'animate__animated animate__fadeIn')}>
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
