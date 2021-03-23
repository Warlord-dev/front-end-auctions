import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function CurrencyInput({ color, placeHolder, max, value, setValue }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const value = e.target.value;
            const decimalIndex = value.indexOf(".");
            if (value.length - decimalIndex > 6) {
              return;
            }
            setValue(value);
          }}
          className={styles.input}
        />
        <div className={`${styles.inputPlacerholder} ${color}`}>{placeHolder}</div>
        <div className={styles.maxButton} onClick={() => setValue(max)}>
          Max
        </div>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  placeHolder: PropTypes.string,
  max: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};
