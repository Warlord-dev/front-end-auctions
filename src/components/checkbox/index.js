import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const CheckBox = ({ className, label, onChange, isDisabled, checked }) => (
  <label className={cn(styles.container, className)}>
    {label}
    <input type="checkbox" checked={checked} disabled={isDisabled} onChange={onChange} />
    <span className={styles.checkmark}></span>
  </label>
);

CheckBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};

CheckBox.defaultProps = {
  className: '',
  label: '',
  onChange: () => {},
  isDisabled: false,
};

export default memo(CheckBox);
