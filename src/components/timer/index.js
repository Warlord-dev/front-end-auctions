import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Timer = ({ className, expirationDate, size }) => {

  const [days, updateDays] = useState(0);
  const [hours, updateHours] = useState(0);
  const [minutes, updateMinutes] = useState(0);
  const [seconds, updateSeconds] = useState(0);
  const interval = useRef();

  useEffect(() => {

    const getTimer = () => {
      const nowDate = new Date();
      const finalDate = new Date(expirationDate);
      const restDate = (finalDate - nowDate) + 1000;
      if (restDate < 0) {
        return;
      }

      updateDays(Math.floor(restDate / 1000 / 60 / 60 / 24));
      updateHours(Math.floor((restDate / 1000 / 60 / 60) % 24));
      updateMinutes(Math.floor(Math.floor((restDate / 1000 / 60) % 60)));
      updateSeconds(Math.floor(Math.floor((restDate / 1000) % 60)));
    };

    getTimer();
    interval.current = setInterval(() => getTimer(), 1000);

    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, [expirationDate]);

  return (
    <div className={cn(className, {
      [styles.isDefault]: size === 'default',
      [styles.isLarge]: size === 'large',
      [styles.isSmall]: size === 'small',
    })}
    >
      {!!days && (
        <>
          <span className={styles.item}>{days < 10 ? `0${days}` : days}</span>
          <span className={styles.dots}>:</span>
        </>
      )}
      <span className={styles.item}>{hours < 10 ? `0${hours}` : hours}</span>
      <span className={styles.dots}>:</span>
      <span className={styles.item}>{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span className={styles.dots}>:</span>
      <span className={styles.item}>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
};

Timer.propTypes = {
  className: PropTypes.string,
  expirationDate: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['default', 'large', 'small']),
};

Timer.defaultProps = {
  className: '',
  size: 'default',
};

export default memo(Timer);
