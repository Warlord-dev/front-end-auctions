import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Timer from '@components/timer';
import styles from './styles.module.scss';

const HIGHEST_APY = 'Highest APY';

const GeneralInformation = ({
  title, date, list, chartImage,
}) => (
  <div className={cn(styles.wrapper)}>
    <h2 className={styles.title}>{ title }</h2>
    <section className={styles.info}>
      <div className={styles.leftSection}>
        <Timer expirationDate={date} size="large" />
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
      <img src={chartImage} alt="chart" />
    </section>
  </div>
);

GeneralInformation.propTypes = {
  title: PropTypes.string.isRequired,
  chartImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};


export default memo(GeneralInformation);
