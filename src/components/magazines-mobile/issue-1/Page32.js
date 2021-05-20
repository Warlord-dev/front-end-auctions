import React from 'react'
import styles from './page32.module.scss'

const Page32 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box1}></div>
      <video autoPlay muted loop className={styles.indiaNecklaceVideo}>
        <source src="./magazine/1/videos/indiaNecklace.mp4" type="video/mp4" />
      </video>
      <img src="./magazine/1/images/Group 1185.png" className={styles.circleImg1} />
      <div className={styles.circleText1}>
        The owl is a vehicle of Lakshmi, the goddess of wealth and good fortune in Hinduism.
      </div>
      <div className={styles.box2}></div>
      <video autoPlay muted loop className={styles.indiaSuitVideo}>
        <source src="./magazine/1/videos/indiaSuit.mp4" type="video/mp4" />
      </video>
      <img src="./magazine/1/images/Group 1186.png" className={styles.circleImg2} />
      <div className={styles.circleText2}>
        The sherwani; a long coat-like jacket that is knee length and originated in 19th century
        India.
        <br />
        <br />
        The jacket contains lotus flowers, which symbolize purity, enlightenment and
        self-regeneration— a popular symbol in India and around the world.
      </div>
      <div className={styles.box3}></div>
      <video autoPlay muted loop className={styles.indiaSuit2Video}>
        <source src="./magazine/1/videos/IndiaDress.mp4" type="video/mp4" />
      </video>
      <img src="./magazine/1/images/Group 1187.png" className={styles.circleImg3} />
      <div className={styles.circleText3}>
        A popular form of Indian women’s dress, the Lehenga Choli, which originated in North India
        during the 10th century and is often worn for weddings or other formal events.
        <br />
        <br />
        The pattern on the skirt is a binary flower, fusing the traditional – a flower – with the
        futuristic – 0’s and 1’s used in binary codes popularized in the movie the Matrix. The
        blouse contains a cubed pattern containing Ravi’s initials, RGS, and was sketched by hand by
        Nureen Wohl, a social worker based in New York City. The headscarf, or the dupatta, contains
        an intricate piece of forehead jewelry, called a maang tikka.
      </div>
    </div>
  )
}

export default Page32