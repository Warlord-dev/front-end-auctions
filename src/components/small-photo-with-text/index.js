import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import { DESIGNERS } from '@constants/router-constants';
import styles from './styles.module.scss';

const SmallPhotoWithText = ({
  className, designerPhoto, designerId, designerName, hashAddress, children,
}) => (
  <div className={cn(styles.designerPhotoWrapper, className)}>
    {designerPhoto && <img className={styles.designerPhoto} src={designerPhoto} alt={designerName} />}
    <Link href={`${DESIGNERS}${designerId}`}>
      <a className={styles.designerName}>{designerName}</a>
    </Link>
    {hashAddress && <p className={cn(styles.hashAddress, 'smallPhotoWithText__hashAddress')} title={hashAddress}>{hashAddress}</p>}
    {children}
  </div>
);

SmallPhotoWithText.propTypes = {
  className: PropTypes.string,
  designerPhoto: PropTypes.string,
  designerId: PropTypes.string,
  designerName: PropTypes.string,
  hashAddress: PropTypes.string,
  children: PropTypes.any,
};

SmallPhotoWithText.defaultProps = {
  className: '',
  designerPhoto: '',
  designerId: '',
  designerName: '',
  hashAddress: '',
  children: null,
};

export default memo(SmallPhotoWithText);
