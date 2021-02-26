import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getDesignerInfoByName } from '@selectors/designer.selectors.js';

import PropTypes from 'prop-types';
import Header from './header';
import GraphWrapper from './graph-wrapper';
import ExamplesList from './examples-list';
import Trade from './trade';
import styles from './styles.module.scss';

const PageDesignerDescription = ({ designerName, clothesIds }) => {
  const designerInfo = useSelector(getDesignerInfoByName(designerName));

  return (
    <div className={styles.wrapper}>
      <Header {...designerInfo} />
      <GraphWrapper />
      <ExamplesList designerName={designerName} />
      <Trade clothesIds={clothesIds} />
    </div>
  );
};

PageDesignerDescription.propTypes = {
  designerName: PropTypes.string.isRequired,
  clothesIds: PropTypes.array.isRequired,
};

PageDesignerDescription.defaultProps = {};

export default memo(PageDesignerDescription);
