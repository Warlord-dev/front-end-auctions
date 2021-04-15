import React from 'react';
import styles from './styles.module.scss'

const UButton = props => {
  const { caption, captionForMobile, style, link } = props
  return (
    <a href={link || '#'} className={styles.uButton} style={style}>
      <span>{caption}</span>
      <span className={styles.forMobile}>{captionForMobile || caption}</span>
    </a>
  );
}

export default UButton;

