import React, { useState } from 'react'
import styles from './page43.module.scss'

const Page43 = () => {
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(true);
  const [video3, setVideo3] = useState(true);
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/69_70/image1.png" className={styles.image1} />
    </div>
  )
}

export default Page43