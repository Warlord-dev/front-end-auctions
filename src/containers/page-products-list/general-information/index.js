import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Timer from '@components/timer';
import { getMainPageChartOptions } from '@services/graph.service';
import styles from './styles.module.scss';

const HIGHEST_APY = 'Highest APY';

const GeneralInformation = ({
  title, timestamp, list, history,
}) => {

  const options = getMainPageChartOptions(history);

  return (
    <div className={cn(styles.wrapper)}>
      <h2 className={styles.title}>{ title }</h2>
      <section className={styles.info}>
        <div className={styles.leftSection}>
          <Timer expirationDate={timestamp} size="large" />
          <ul className={styles.list}>
            {list.map(({ description, value }) => (
              <li key={description} className={styles.item}>
                <span>{description}</span>
                <span className={styles.value}>
                  {value.toLocaleString('en')}
                  {description === HIGHEST_APY ? '%' : ' ETH'}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
          <p className={styles.chartBottomText}>30 days sales</p>
        </div>
      </section>
    </div>
  );
};

GeneralInformation.propTypes = {
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
};


export default memo(GeneralInformation);
