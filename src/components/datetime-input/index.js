import React, { useState } from 'react';
import styles from './styles.module.scss';

const DatetimeInput = ({ timestamp }) => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="number"
          className={styles.hour}
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          min="0"
          max="23"
        />
        <button type="button" className={styles.spinUp}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button type="button" className={styles.spinDown}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
      </div>
      <label> HOUR </label>
      <div className={styles.devider} />
      <div className={styles.inputWrapper}>
        <input
          type="number"
          className={styles.minute}
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          min="0"
          max="59"
        />
        <button type="button" className={styles.spinUp}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button type="button" className={styles.spinDown}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
      </div>
      <label> MINUTE </label>
      <div className={styles.devider} />
      <div className={styles.inputWrapper}>
        <input
          type="number"
          className={styles.day}
          value={day}
          onChange={(e) => setDay(e.target.value)}
          min="0"
          max="31"
        />
        <button type="button" className={styles.spinUp}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button type="button" className={styles.spinDown}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
      </div>
      <label> DAY </label>
      <div className={styles.devider} />
      <div className={styles.inputWrapper}>
        <input
          type="number"
          className={styles.month}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          min="0"
          max="12"
        />
        <button type="button" className={styles.spinUp}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button type="button" className={styles.spinDown}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
      </div>
      <label> MONTH </label>
      <div className={styles.devider} />
      <div className={styles.inputWrapper}>
        <input
          type="number"
          className={styles.year}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          min="0"
          max="9999"
        />
        <button type="button" className={styles.spinUp}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button type="button" className={styles.spinDown}>
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
      </div>
      <label> YEAR </label>
    </div>
  );
};

export default DatetimeInput;
