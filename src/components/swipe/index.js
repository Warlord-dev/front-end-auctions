import React from 'react'
import styles from './styles.module.scss'
import SwipeableViews from 'react-swipeable-views';

export default function swipePage({ children }) {

  return (
    <div className={styles.wrapper}>
      <SwipeableViews enableMouseEvents>
        { children }
      </SwipeableViews>
    </div>
  )
}
