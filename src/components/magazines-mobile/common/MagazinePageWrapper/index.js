import React, { forwardRef } from 'react'
import styles from './styles.module.scss'

const MagazinePageWrapper = forwardRef((props, ref) => {
  const {
    secondPart
  } = props

  return (
    <div ref={ref} className={styles.magazinePageWrapper}>
      <div className={
        [
          styles.contentWrapper, 
          secondPart && styles.secondPart
        ].join(' ')
      }>
      { props.children }
      </div>
    </div>
  )
})

export default MagazinePageWrapper