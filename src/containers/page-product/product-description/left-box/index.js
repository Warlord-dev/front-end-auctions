import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ViewImages from '@components/view-images';
import styles from './styles.module.scss';

const LeftBox = ({ clothesPhotos, clothesName }) => (
  <div className={cn(styles.leftBox, 'animate__animated animate__fadeIn')}>
    <ViewImages clothesPhotos={clothesPhotos} clothesName={clothesName} />
  </div>
);

LeftBox.propTypes = {
  clothesPhotos: PropTypes.array,
  clothesName: PropTypes.string,
};

LeftBox.defaultProps = {
  clothesPhotos: [],
  clothesName: '',
};

export default memo(LeftBox);
