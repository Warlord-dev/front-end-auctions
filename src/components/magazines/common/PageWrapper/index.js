import React, { forwardRef } from 'react'
import styles from './styles.module.scss'

const PageWrapper = forwardRef((props, ref) => {
  const {
    secondPart
  } = props

  return (
    <div ref={ref} className={styles.magazinePageWrapper}>
      <div className={[styles.contentWrapper, secondPart && styles.secondPart].join(' ')}
        style={{
          transformOrigin: '0 0',
          transform: 'scale(1)'
        }}
      >
      { props.children }
      </div>
    </div>
  )
})

export default PageWrapper