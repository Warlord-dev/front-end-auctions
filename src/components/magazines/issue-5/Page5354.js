import React from 'react'
import Link from 'next/link'
import styles from './page5354.module.scss'

const Page5354 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/5354_image1.png' className={styles.image1}/>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>
      <div className={styles.rect7}></div>

      <Link href='https://twitter.com/McMistrzYT'>
        <a target='_blank'>
          <div className={styles.text1}>
            McMistrzYT        
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        I want to be a game developer because of the many game ideas that aren’t yet in published games. There is so much yet to be created. Creating new games can be interesting and an awesome journey.
      </div>
      <div className={styles.text3}>
        In-game example of my commands expansion 
      </div>
      <div className={styles.text4}>
        I created my first game when I was 9, it’s called “Fanmade Clickertale''. I have a few games like Faberlare coming soon, and a few secret projects like Uninite, SkyBlock the Game, Geometry Box + and more.
      </div>
      <div className={styles.text5}>
        I mostly get inspired by watching others make games on YouTube, but people like Emma motivate me too. 
      </div>
      <div className={styles.text6}>
        I learnt modding through YT tutorials & also the broader modding community. 
      </div>
      <div className={styles.text7}>
        My favourite game is A Hat in Time, because of its great super-mario-odyssey-like gameplay and also extensive modding support.
      </div>
      <div className={styles.text8}>
        Open Source games are the future. They let people easily modify and upgrade the experience.
      </div>
    </div>
  )
}

export default Page5354
