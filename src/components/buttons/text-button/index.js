import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const TextButton = ({
  className, onClick, children,
}) => (
  <button className={cn(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);

TextButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

TextButton.defaultProps = {
  className: '',
  onClick: () => {},
  children: null,
};

export default memo(TextButton);
