import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import GraphWrapper from './graph-wrapper';
import ExamplesList from './examples-list';
import Trade from './trade';
import styles from './styles.module.scss';

const PageDesignerDescription = ({
  designerId, clothesIds,
}) => (
  <div className={styles.wrapper}>
    <Header designerId={designerId} />
    <GraphWrapper />
    <ExamplesList designerId={designerId} />
    <Trade clothesIds={clothesIds} />
  </div>
);

PageDesignerDescription.propTypes = {
  designerId: PropTypes.string.isRequired,
  clothesIds: PropTypes.array.isRequired,
};

PageDesignerDescription.defaultProps = {
};

export default memo(PageDesignerDescription);
