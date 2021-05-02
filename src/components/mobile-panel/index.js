import React from 'react'
import styles from './styles.module.scss'

const MobilePanel = props => {
  const { children, backgroundColor, color } = props
  return (
    <div className={styles.wrapper} style={{
      backgroundColor: backgroundColor || 'black',
      color: color || 'white'
    }}>
      {children}
    </div>
  )
}

export default MobilePanel