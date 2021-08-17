import React from 'react'
import styles from './page98.module.scss'
import Link from 'next/link'

const Page98 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='./magazine/4/images/105106_image2.png' />
      <img className={styles.image2} src='./magazine/4/images/105106_image3.png' />

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <div className={styles.text1}>
        The beauty of Web 3.0 is that its solutions are endlessly interoperable. They can be iterated in as many ways as it could support DeCo’s ultimate goal: an open, fair, and transparent way of exchanging products and services, one where its stakeholders benefit along with the ecosystem that enables it, not to mention one that incentivises them to act in line with its long-term objectives, rather than merely the size of their shareholders’ dividends and their directors’ fat bonuses.
        <br /><br />
        Information is asymmetrical among stakeholders in a traditional centralized and non-standardized supply chain. Buyers don’t know where their suppliers source their products. Suppliers don’t know where manufacturers obtain their raw materials. Every stakeholder is left to their own devices as far as managing data is concerned.
      </div>
    </div>
  )
}

export default Page98