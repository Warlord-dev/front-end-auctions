/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closeNotInstalledMetamask } from '@actions/modals.actions';
import cn from 'classnames';
import styles from './styles.module.scss';

const Notification = ({
  className, title, text,
}) => {
  const dispatch = useDispatch();

  const closeNotification = () => {
    dispatch(closeNotInstalledMetamask());
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <button className={styles.closeIcon} onClick={() => closeNotification()}>
        X
      </button>
      <p className={styles.title}>{title}</p>
      {!!text.length && text.map((item) => <p key={item} className={styles.text}>{item}</p>)}
    </div>
  );
};


Notification.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.array,
};

Notification.defaultProps = {
  className: '',
  title: 'Notification',
  text: [],
};

export default Notification;
