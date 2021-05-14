import React from 'react'
import styles from './page12.module.scss'

const Page12 = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Interrobang | The essence of the metaverse is that it’s multimodal. 
        People have a choice in how to interact with content & experiences. <br />
        We can set the foundation for that in starting with how to interpret a magazine visually.</h3>
      <div>
        <h1>M</h1>
        <h1>E</h1>
        <h1>T</h1>
        <h1>A</h1>
      </div>
      <video autoPlay muted loop >
        <source src='./magazine/1/videos/moshed-05-01-9-54-15.mp4' type="video/mp4" />
      </video>
    </div>
  )
}

export default Page12