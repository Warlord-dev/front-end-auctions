import React from 'react'
import styles from './styles.module.scss'

const DigitalChangingRoom = props => {
  const { className } = props
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      <div className={styles.header}>
        <button className={styles.leftArrow}>
          <img src='/images/user-profile/arrow-left.png' />
        </button>
        <div className={styles.label}>DIGITAL CHANGING ROOM</div>
        <button className={styles.rightArrow}>
          <img src='/images/user-profile/arrow-right.png' />
        </button>
      </div>
    </div>
  )
}

export default DigitalChangingRoom