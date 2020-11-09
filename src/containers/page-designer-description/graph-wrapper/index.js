import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const GRAPH_IMAGES = '/images/graph-large.png';

const GraphWrapper = ({ title }) => (
  <section className={styles.wrapper}>
    <p className={styles.title}>{title}</p>
    <div className={styles.imageWrapper}>
      <img src={GRAPH_IMAGES} alt="graph" />
    </div>
  </section>
);

GraphWrapper.propTypes = {
  title: PropTypes.string,
};

GraphWrapper.defaultProps = {
  title: '30 Days trading vol',
};

export default memo(GraphWrapper);
