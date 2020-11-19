import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getMonthDesignerResultedAuctions } from '@selectors/auction.selectors';
import { getDesignerChartOptions } from '@services/graph.service';

import styles from './styles.module.scss';

const GraphWrapper = ({ title }) => {

  const monthResultedAuctions = useSelector(getMonthDesignerResultedAuctions).toJS();

  const options = getDesignerChartOptions(monthResultedAuctions);

  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.chartWrapper}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        <p className={styles.chartBottomText}>30 days sales</p>
      </div>
    </section>
  );
};

GraphWrapper.propTypes = {
  title: PropTypes.string,
};

GraphWrapper.defaultProps = {
  title: '30 Days trading vol',
};

export default memo(GraphWrapper);
