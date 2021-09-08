import React from 'react'
import styles from './page10.module.scss'

const Page10 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/1112_image1.png' className={styles.image1} />
      <img src='/magazine/4/images/1112_image2_mobile.png' className={styles.image2} />
      <div className={styles.rect1}></div>
      <div className={styles.text1}>
        And it’s not like you have a choice in the matter–there is no way to skirt the middleman when you rely solely on his or her benevolence or malevolence, for that matter.
        <br /><br />
        Moreover, just as centralised commerce platforms have the power to facilitate cross-border trade like no other, they can just as much restrict or prohibit trade from happening in the first place, for any reason they deem necessary. That’s not to mention the inherent right and power to censor on the platforms which they can wield to restrict the sale and purchase of products or services that may run counter to the party line–or their bottom line, for that matter. This includes expunging products and services that may be seen as offensive, politically incorrect, or that otherwise may pose an existential threat to their business. After all, what are they in power for? 
        <br /><br />
        The draconian overreach from platforms like Facebook, Google, and Twitter is alive, well, and thriving in Commerce 2.0. For instance, while Amazon has wielded its power to ban sellers found to have been breaching their policies on soliciting positive reviews to protect their customers (which is a good thing), they have also been guilty of lowkey competing against its own users by releasing their own line of products at even lower prices which they can easily afford (and boost sales of their own products).
      </div>
    </div>
  )
}

export default Page10
