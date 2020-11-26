import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { getSumFloatNumber, getSubtractFloatNumber } from '@helpers/price.helpers';
import styles from './styles.module.scss';

const InputWithArrows = ({
  className, value, currency, iconUrl, onChange, minBidIncrement,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleClickUp = () => {
    setInputValue(getSumFloatNumber(inputValue, minBidIncrement));
    onChange(getSumFloatNumber(inputValue, minBidIncrement));
  };

  const handleClickDown = () => {
    if (inputValue > minBidIncrement) {
      setInputValue(getSubtractFloatNumber(inputValue, minBidIncrement));
      onChange(getSumFloatNumber(inputValue, minBidIncrement));
    } else {
      setInputValue(0);
    }
  };

  return (
    <>
      <div className={cn(className, styles.wrapper)}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
          }}
          className={styles.input}
        />
        <div className={styles.buttonWrapper}>
          <button onClick={() => handleClickUp()} className={cn(styles.button, styles.buttonTop)}>
            <img src={iconUrl} alt="arrow" />
          </button>
          <button onClick={() => handleClickDown()} className={cn(styles.button, styles.buttonBottom)}>
            <img src={iconUrl} alt="arrow" />
          </button>
        </div>
        <p className={styles.prefixRight}>{currency}</p>
      </div>
    </>
  );
};


InputWithArrows.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  currency: PropTypes.string,
  iconUrl: PropTypes.string,
  minBidIncrement: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputWithArrows.defaultProps = {
  className: '',
  value: '',
  currency: 'Ξ',
  iconUrl: './images/icons/arrow-bottom.svg',
};

export default InputWithArrows;
