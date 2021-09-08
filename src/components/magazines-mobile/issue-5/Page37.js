import React from 'react'
import styles from './page37.module.scss'
import DesignerBubble from '@containers/designer-bubble-mobile'

const Page37 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/4142_image2.png' />
      <img className={styles.image2} src='/magazine/4/images/4142_image2.png' />
      <DesignerBubble />
    </div>
  )
}

export default Page37