import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import { INDEX_PATH } from '@constants/router-constants';
import styles from './styles.module.scss';

const Logo = ({ className }) => (
  <Link href={INDEX_PATH}>
    <a className={cn(className, styles.wrapper)}>
      <img src="/images/icons/logo.svg" alt="logo" />
      <p className={styles.description}>The Digital Fashion Engine</p>
    </a>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default memo(Logo);
