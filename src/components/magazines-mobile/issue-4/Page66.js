import React from 'react'
import Link from 'next/link'
import styles from './page66.module.scss'

const Page66 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/7374_background1.png' />
      <Link href='https://www.instagram.com/deevo_2021/'>
        <a target='_blank'>
          <div className={styles.text1}>
            The Scream | Crypto Deevo
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        Crypto Deevo is the alias of Mario Ricco, an Italian designer, creative director and professional videogame developer. After his graduation in architecture at Politecnico di Milano he started an international career as a digital designer, working for high profile videogame publishers like that of Electronic Arts, Ubisoft, IGG and FUNPLUS. Besides his activity in the world of videogames, he has continued his career as a digital fashion and exhibition designer. Currently he is living between Europe and the Far East.
      </div>
    </div>
  )
}

export default Page66