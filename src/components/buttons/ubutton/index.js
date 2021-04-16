import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss'

const UButton = props => {
  const { caption, captionForMobile, style, link } = props
  return (
    <Link href={link || '#'}>
      <a className={styles.uButton} style={style}>
        <span>{caption}</span>
        <span className={styles.forMobile}>{captionForMobile || caption}</span>
      </a>
    </Link>
  );
}

export default UButton;

