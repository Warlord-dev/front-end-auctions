import React from 'react'
import styles from './page9.module.scss'

const Page9 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/1112_image1.png' className={styles.image1} />
      <img src='/magazine/4/images/1112_image1.png' className={styles.image2} />
      <div className={styles.rect1}></div>
      <div className={styles.text1}>
        It’s no pittance, either–while fees may vary depending on the platform, they can be as high as over 10% per item sold, regardless of the brand and the category. Buyers essentially cover this cost by buying at higher prices, while sellers’ costs are already priced in. The platforms make bank no matter what happens.

        There’s no question that the model works. With a $1.7 trillion market capitalization as of this writing, Amazon has trillions of reasons why. They’re not running a charity, if that still isn’t abundantly clear to everyone by this time. Jeff Bezos needs to eat, dammit.

        But therein lies the rub.
      </div>
      <div className={styles.text2}>
        Because it’s not just about putting up an online marketplace to bring buyers and sellers together. You are, after all, the product. Suffice to say, these companies gather data about their users, their preferences, and their purchasing and selling habits. And, as with most commerce platforms, transactions are made using payment methods that require KYC. This allows them to build a dossier on every single one of its users–which is information that you otherwise wouldn’t necessarily want to be giving away freely. Much like web2, your data is entirely at the mercy of the platforms you use.
      </div>
    </div>
  )
}

export default Page9