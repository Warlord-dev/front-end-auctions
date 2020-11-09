import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import GraphWrapper from './graph-wrapper';
import ExamplesList from './examples-list';
import Trade from './trade';
import styles from './styles.module.scss';


const PageDesignerDescription = ({ designerInfo, allClothesThisDesigner, currentTradeHistory }) => (
  <div className={styles.wrapper}>
    <Header {...designerInfo} />
    <GraphWrapper />
    <ExamplesList data={allClothesThisDesigner} />
    <Trade tradeHistory={currentTradeHistory} />
  </div>
);

PageDesignerDescription.propTypes = {
  designerInfo: PropTypes.object.isRequired,
  allClothesThisDesigner: PropTypes.array,
  currentTradeHistory: PropTypes.array,
};

PageDesignerDescription.defaultProps = {
  allClothesThisDesigner: null,
  currentTradeHistory: null,
};

export default memo(PageDesignerDescription);
