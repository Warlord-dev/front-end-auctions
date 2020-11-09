import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ExamplesWorkLine from './examples-work-line';
import styles from './styles.module.scss';


const ListExamplesWork = ({ data, headerTitle }) => (
  <div>
    <div className={styles.headerTitle}>
      {headerTitle.map((item) => <p key={item} className={styles.headerTitleItem}>{item}</p>)}
    </div>
    <div className={styles.body}>
      {data.map((item) => <ExamplesWorkLine key={item.clothesId} {...item} />)}
    </div>
  </div>
);


ListExamplesWork.propTypes = {
  headerTitle: PropTypes.array,
  data: PropTypes.array.isRequired,
};

ListExamplesWork.defaultProps = {
  headerTitle: ['Design', '', 'Last Price', 'Yield (estimates)', 'Listed Date', 'Status'],
};

export default memo(ListExamplesWork);
