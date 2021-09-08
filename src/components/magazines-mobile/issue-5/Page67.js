import React from 'react'
import Link from 'next/link'
import styles from './page67.module.scss'

const Page67 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/7374_background2.png' />
      <h1>
        Laurelia
      </h1>
      <Link href='https://www.instagram.com/blancdeblanc.co/'>
        <a target='_blank'>
          <div className={styles.text1}>
            Blanc de Blanc    
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        Blanc de Blanc is a digital fashion atelier. We lead fashion brands into the digital fashion world, where all of our collections are created digital only. We strongly believe that digital is a new chapter for the fashion industry that should be embraced. Our big idea is to change user’s behaviours, guiding them to act sustainability and decrease the waste from physical clothing usage.
      </div>
    </div>
  )
}

export default Page67