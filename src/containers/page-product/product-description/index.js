import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LeftBox from './left-box';
import RightBox from './right-box';
import styles from './styles.module.scss';

const ProductDescription = ({ clothesId, currentClothesInfo }) => {
  const designersInfo = useSelector((state) => state.designersInfo.toJS());

  const currentDesignersInfo = designersInfo.find((item) => item?.designerId === '1');

  return (
    <div className={styles.wrapper}>
      <LeftBox {...currentClothesInfo} />
      <RightBox
        clothesId={clothesId}
        currentClothesInfo={currentClothesInfo}
        currentDesignersInfo={currentDesignersInfo}
      />
    </div>
  );
};

ProductDescription.propTypes = {
  currentClothesInfo: PropTypes.object.isRequired,
  clothesId: PropTypes.string.isRequired,
};

ProductDescription.defaultProps = {
};

export default memo(ProductDescription);
