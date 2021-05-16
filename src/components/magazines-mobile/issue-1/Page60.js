import React from 'react'
import styles from './page60.module.scss'

const Page60 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page60-bg.png" className={styles.backImage} />
      <div className={styles.innerWrapper}>
        <h1>E-SPORTS PLAYER OF THE MONTH</h1>
        <div className={styles.section1}>
          <h2>Tenz</h2>
          <h4>metaverse ready score: 5</h4>
          <p>Sentinel’s TenZ becomes the first player to reach the highest rank in Valorant’s competitive Mode. TenZ has been playing competitive mode since April where he was initially placed in the Immortal rank right after he finished his five placement matches. </p>
        </div>
        <div className={styles.section2}>
          <h2>E-SPORTS RISING STAR OF THE MONTH</h2>
          <p>Turkish Star who has dominated the League of Legends European Championship.</p>
          <p>ARMUT - the top laner for MAD Lions has only been with the team for a few months but has quickly captivated the hearts of league fans around the world by proving that he can help his team with the ELC Spring Split championship.</p>
          <p>metaverse ready score: 7</p>
        </div>
        <div className={styles.section3}>
          <h2>North American Valorant Masters</h2>
          <p>Sentinels have been crowned as North America’s First Regional Champion. The team will be going to Iceland to represent their region in the first ever Valorant Champions Tour.</p>
        </div>
        <div className={styles.section4}>
          <h2> Intel World Open</h2>
          <p>Intel will hold its World Open Esports event alongside the Tokyo Olympics.</p>
          <p>Qualifiers for the Rocket League and Street Fighter tournament will begin in June with regional finals held in mid-July</p>
        </div>
        <div className={styles.section5}>
          <h2>Tournament  Platform  Epulze secured £4.7M Investment</h2>
          <p>E-sports tournament platform Epulze has secured an investment of £4.7M from its recent funding round. The participating companies who invested are Swedish financial group Svea Ekonomi and Norwegian Carucel Finance.</p>
        </div>
        <div className={styles.section6}>
          <h2>ESL announces player POV streams</h2>
          <p>Good news to esports fans who watch CS:GO Tournaments. ESL had previously announced a new way of enjoying your favorite matches through POV Streams. Viewers will be able to experience the new feature first hand during the playoffs of DreamHack Masters Spring. </p>
        </div>
        <div className={styles.section7}>
          <h2>RIOT Games will launch Wild Rift E-sports tournament in late 2021</h2>
          <p>Riot Games has recently confirmed the launch of the League of Legends Wild Rift esports tournament in late 2021. </p>
        </div>
      </div>
    </div>
  )
}

export default Page60