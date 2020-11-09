import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { setValueInUserReducer } from '@actions/user.actions';
import { getSumFloatNumber, getSubtractFloatNumber } from '@helpers/prise.helpers';
import { STEP } from '@constants/price-constants';
import styles from './styles.module.scss';

const InputWithArrows = ({
  className, value, currency, iconUrl,
}) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(value);

  const handleClickUp = () => {
    setInputValue(getSumFloatNumber(inputValue, STEP));
  };

  const handleClickDown = () => {
    if (inputValue >= 0.05) {
      setInputValue(getSubtractFloatNumber(inputValue, STEP));
    }
  };

  useEffect(() => {
    dispatch(setValueInUserReducer('activeValueEthInInputInModal', inputValue));
  }, [inputValue]);

  return (
    <>
      <div className={cn(className, styles.wrapper)}>
        {/* prefixLeft */}
        {/* <p className={styles.prefixLeft}>{currency}</p> */}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
        />
        {/* prefixCenter */}
        <p className={styles.prefixCenter}>{currency}</p>
        <div className={styles.buttonWrapper}>
          <button onClick={() => handleClickUp()} className={cn(styles.button, styles.buttonTop)}>
            <img src={iconUrl} alt="arrow" />
          </button>
          <button onClick={() => handleClickDown()} className={cn(styles.button, styles.buttonBottom)}>
            <img src={iconUrl} alt="arrow" />
          </button>
        </div>
        {/* prefixWithBorder */}
        {/* <p className={styles.prefixWithBorder}>{currency}</p> */}
        {/* prefixRight */}
        {/* <p className={styles.prefixRight}>{currency}</p> */}
      </div>
    </>
  );
};


InputWithArrows.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  currency: PropTypes.string,
  iconUrl: PropTypes.string,
};

InputWithArrows.defaultProps = {
  className: '',
  value: '',
  currency: 'ETH',
  iconUrl: '/images/icons/arrow-bottom.svg',
};

export default InputWithArrows;
