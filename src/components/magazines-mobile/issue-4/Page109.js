import React from 'react'
import styles from './page109.module.scss'

const Page109 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <div className={styles.text1}>
        XENOTECH
      </div>
      <div className={styles.text2}>
        XENOTECH
      </div>
      <div className={styles.text3}>
        This content is not directly related to Digital Fashion, but since I've been traveling I haven't had access to my computer to 3D model. Instead, with my laptop, I started working on a side project based around what I think the Metaverse version of GoodReads would look like. This project was inspired by how limited and outdated the UI of GoodReads is and how I desperately I want a book management / tracking tool that exist spatially—one that is accessible through web browsers, VR, and AR. 
      </div>
      <div className={styles.text4}>
        The main concept is a visual 3D bookshelf that you can use to track your book collecting and reading habits. The bookshelf would start blank and when you read a new book that you want to add to the shelf, you could scan your physical book and then a 3D model of that book would automatically be generated. Then you can display these 3D books on your shelf, share your shelf with your friends/social media, or pull up your 3D bookshelf in AR with your phone.
      </div>
    </div>
  )
}

export default Page109