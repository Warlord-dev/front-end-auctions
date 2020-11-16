import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import { DESIGNERS } from '@constants/router-constants';
import styles from './styles.module.scss';

const SmallPhotoWithText = ({
  id,
  photo,
  address,
  className,
  children,
}) => (
  <div className={cn(styles.designerPhotoWrapper, className)}>
    {photo && <img className={styles.designerPhoto} src={photo} alt={id} />}
    <Link href={`${DESIGNERS}${id}`}>
      <a className={styles.designerName}>{id}</a>
    </Link>
    {address && <p className={cn(styles.hashAddress, 'smallPhotoWithText__hashAddress')} title={address}>{address}</p>}
    {children}
  </div>
);

SmallPhotoWithText.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.string,
  id: PropTypes.string,
  address: PropTypes.string,
  children: PropTypes.any,
};

SmallPhotoWithText.defaultProps = {
  className: '',
  photo: '',
  id: '',
  address: '',
  children: null,
};

export default memo(SmallPhotoWithText);
