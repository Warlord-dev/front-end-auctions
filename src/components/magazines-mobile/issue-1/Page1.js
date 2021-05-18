import React from 'react'
import styles from './page1.module.scss'

const Page1 = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Interrobang | The essence of the metaverse is that it’s multimodal. 
        People have a choice in how to interact with content & experiences. <br />
        We can set the foundation for that in starting with how to interpret a magazine visually.</h3>
      <h1>M<br/>E<br/>T<br/>A</h1>
      <video autoPlay muted loop >
        <source src='./magazine/1/videos/moshed-05-01-9-54-15.mp4' type="video/mp4" />
      </video>
    </div>
  )
}

export default Page1