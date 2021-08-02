import React from 'react'
import styles from './page1112.module.scss'


const Page1112 = () => {
  return (
    <div className={styles.wrapper}>         
      <img src='/magazine/4/images/1112_image1.png' className={styles.image1}/>
      <img src='/magazine/4/images/1112_image1.png' className={styles.image2}/>
      <img src='/magazine/4/images/1112_image2.png' className={styles.image3}/>

      <div className={styles.circle}></div>
      <div className={styles.rectangle}></div>
      <div className={styles.text1}>
        It’s no pittance, either–while fees may vary depending on the platform, they can be as high as over 10% per item sold, regardless of the brand and the category. Buyers essentially cover this cost by buying at higher prices, while sellers’ costs are already priced in. The platforms make bank no matter what happens.
        <br /><br />
        There’s no question that the model works. With a $1.7 trillion market capitalization as of this writing, Amazon has trillions of reasons why. They’re not running a charity, if that still isn’t abundantly clear to everyone by this time. Jeff Bezos needs to eat, dammit.
        <br /><br />
        But therein lies the rub.
      </div>
      <div className={styles.text2}>
        Because it’s not just about putting up an online marketplace to bring buyers and sellers together. You are, after all, the product. Suffice to say, these companies gather data about their users, their preferences, and their purchasing and selling habits. And, as with most commerce platforms, transactions are made using payment methods that require KYC. This allows them to build a dossier on every single one of its users–which is information that you otherwise wouldn’t necessarily want to be giving away freely. Much like web2, your data is entirely at the mercy of the platforms you use.
      </div>
      <div className={styles.text3}>
        And it’s not like you have a choice in the matter–there is no way to skirt the middleman when you rely solely on his or her benevolence or malevolence, for that matter.
        <br /><br />
        Moreover, just as centralised commerce platforms have the power to facilitate cross-border trade like no other, they can just as much restrict or prohibit trade from happening in the first place, for any reason they deem necessary. That’s not to mention the inherent right and power to censor on the platforms which they can wield to restrict the sale and purchase of products or services that may run counter to the party line–or their bottom line, for that matter. This includes expunging products and services that may be seen as offensive, politically incorrect, or that otherwise may pose an existential threat to their business. After all, what are they in power for? 
        <br /><br />
        The draconian overreach from platforms like Facebook, Google, and Twitter is alive, well, and thriving in Commerce 2.0. For instance, while Amazon has wielded its power to ban sellers found to have been breaching their policies on soliciting positive reviews to protect their customers (which is a good thing), they have also been guilty of lowkey competing against its own users by releasing their own line of products at even lower prices which they can easily afford (and boost sales of their own products).
      </div>
    </div>
  )
}

export default Page1112