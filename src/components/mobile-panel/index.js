import React from 'react'
import styles from './styles.module.scss'

const MobilePanel = props => {
  const { children, backgroundColor, color, style } = props
  return (
    <div className={styles.wrapper} style={{
      backgroundColor: backgroundColor || 'black',
      color: color || 'white',
      ...style
    }}>
      {children}
    </div>
  )
}

export default MobilePanel