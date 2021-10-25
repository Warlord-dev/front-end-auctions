import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const DatetimeInput = ({ timestamp, timeStampChanged }) => {
  const date = new Date(timestamp);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDay());
  const [minute, setMinute] = useState(date.getMinutes());
  const [hour, setHour] = useState(date.getHours());

  useEffect(() => {
    if (
      year !== date.getFullYear() ||
      month !== date.getMonth() ||
      day !== date.getDay() ||
      minute !== date.getMinutes() ||
      hour !== date.getHours()
    ) {
      const newDate = new Date(year, month, day, hour, minute);
      timeStampChanged(newDate.getTime());
    }
  }, [year, month, day, minute, hour]);

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
        <button
          type="button"
          className={styles.spinUp}
          disabled={hour >= 23}
          onClick={() => setHour(hour + 1)}
        >
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button
          type="button"
          className={styles.spinDown}
          disabled={hour <= 0}
          onClick={() => setHour(hour - 1)}
        >
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
        <button
          type="button"
          className={styles.spinUp}
          disabled={minute >= 59}
          onClick={() => setMinute(minute + 1)}
        >
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button
          type="button"
          className={styles.spinDown}
          disabled={minute <= 0}
          onClick={() => setMinute(minute - 1)}
        >
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
        <button
          type="button"
          className={styles.spinUp}
          disabled={day >= 31}
          onClick={() => setDay(day + 1)}
        >
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button
          type="button"
          className={styles.spinDown}
          disabled={day <= 0}
          onClick={() => setDay(day - 1)}
        >
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
        <button
          type="button"
          className={styles.spinUp}
          disabled={month >= 12}
          onClick={() => setMonth(month + 1)}
        >
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button
          type="button"
          className={styles.spinDown}
          disabled={month <= 0}
          onClick={() => setMonth(month - 1)}
        >
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
        <button
          type="button"
          className={styles.spinUp}
          disabled={year >= 9999}
          onClick={() => setYear(year + 1)}
        >
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
        <button
          type="button"
          className={styles.spinDown}
          disabled={year <= 0}
          onClick={() => setYear(year - 1)}
        >
          {' '}
          <img src="/images/metaverse/down-arrow (1) 1.png" />{' '}
        </button>
      </div>
      <label> YEAR </label>
    </div>
  );
};

export default DatetimeInput;
