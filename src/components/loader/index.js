import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import LoadingOverlay from 'react-loading-overlay';
import styles from './styles.module.scss';

const Loader = ({ className, size, active = false }) => {
  return (
    // <div className={cn(styles.wrapper, className)}>
    //   <img
    //     className={cn(styles.loader, {
    //       [styles.default]: size === 'default',
    //       [styles.large]: size === 'large',
    //     })}
    //     src="./images/icons/loader.svg"
    //     alt="loader"
    //   />
    // </div>
    <LoadingOverlay active={active} spinner />
  );
};

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large']),
};

Loader.defaultProps = {
  className: '',
  size: 'default',
};

export default Loader;
