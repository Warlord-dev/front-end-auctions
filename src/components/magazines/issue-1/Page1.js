import React, { forwardRef } from 'react'
import styles from './page1.module.scss'

const Page1 = props => {
  return (
    <div className={styles.wrapper}>
      <h3>Interrobang | The essence of the metaverse is that it’s multimodal. 
        People have a choice in how to interact with content & experiences. 
        We can set the foundation for that in starting with how to interpret a magazine visually.</h3>
      <h1>META</h1>
      <h2>VERSE</h2>
    </div>
  )
}

export default Page1