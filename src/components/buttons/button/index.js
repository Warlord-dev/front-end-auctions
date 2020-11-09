import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Button = ({
  className, background, onClick, children, isDisabled,
}) => (
  <button
    className={cn(
      styles.button,
      {
        [styles.transparent]: background === 'transparent',
        [styles.black]: background === 'black',
      },
      className,
    )}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  background: PropTypes.oneOf(['transparent', 'black']),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.any,
};

Button.defaultProps = {
  className: '',
  background: 'transparent',
  onClick: () => {},
  isDisabled: false,
  children: null,
};

export default memo(Button);
