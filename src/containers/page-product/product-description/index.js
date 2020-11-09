import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LeftBox from './left-box';
import RightBox from './right-box';
import styles from './styles.module.scss';

const ProductDescription = ({ currentClothesInfo, currentMaterial }) => {
  const designersInfo = useSelector((state) => state.designersInfo.toJS());

  const currentDesignersInfo = designersInfo.find((item) => item?.designerId === currentClothesInfo?.designerId);

  return (
    <div className={styles.wrapper}>
      <LeftBox {...currentClothesInfo} />
      <RightBox currentClothesInfo={currentClothesInfo} currentDesignersInfo={currentDesignersInfo} currentMaterial={currentMaterial} />
    </div>
  );
};

ProductDescription.propTypes = {
  currentClothesInfo: PropTypes.object.isRequired,
  currentMaterial: PropTypes.array,
};

ProductDescription.defaultProps = {
  currentMaterial: null,
};

export default memo(ProductDescription);
