import React from 'react'
import styles  from './page46.module.scss'

const Page46 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/5152_video1.mp4' type='video/mp4' />
      </video>
      <div className={styles.back}></div>

      <img className={styles.image1} src='/magazine/4/images/5152_instagram.png' />
      <img className={styles.image2} src='/magazine/4/images/5152_instagram.png' />
      <img className={styles.image3} src='/magazine/4/images/5152_instagram.png' />
      <img className={styles.image4} src='/magazine/4/images/5152_instagram.png' />
      <img className={styles.image5} src='/magazine/4/images/5152_instagram.png' />
      <img className={styles.image6} src='/magazine/4/images/5152_instagram.png' />
      <img className={styles.image7} src='/magazine/4/images/5152_instagram.png' />

      <div className={styles.text1}>
        Gatekeeper Gardens        
      </div>

      <div className={styles.text2}>
        Sifting through the web2 weeds— spotlighting stories from the walled gardens where they love to tangle and lurk. 
      </div>

      <div className={styles.text3}>
        INSTAGRAM.
      </div>

      <div className={styles.text4}>
        These days, it seems that there is no end to the constant hurdles being put in place to separate customers from compassionate, intellectually sound humans for customer service agents.  Instead, most of us are used to interacting with some AI chatbot that in almost everyway is a complete black box— this is made abundantly clear when any question outside a generic conversation A/B decision tree is injected. 
      </div>

      <div className={styles.text5}>
        This is not the bitter complaint of a customer who has been burned once. Rather, it’s much more of a look into an insidious, looming and almost invisible problem. The very algorithms that we see at work everyday in the world around us, directly shape and influence the constraints and limits to our capacity. It might have once made sense to be hopeful about how extreme logical automation could actually improve the experience of humanity, but this is naive. Because, who designs these algorithms? At this point it’s shitty algorithms designing more shitty algorithms. And the problem has come that now these shitty algorithms are eating the internal workings and decision making processes of global and international mega companies.
        <br /><br />
        One of those is the everything store; Amazon. And at the heart of this is its all powerful physical and digital cloud brain trust— AWS. The entire customer service and support supply chain is black boxed to the point where it is unlikely that any human being has any idea how the full system works.
      </div>

      <div className={styles.text6}>
        And with so many global interactions and transactions taking place every minute within this system, it’s scary to think of the scale of impact that a centralised line of code with near zero human oversight can have in dominating control on the outcomes of so many people and lives. More problems are being created than being solved, and it only further reinforces that while some algorithms attempt to eat the world it is really decentralisation that needs to eat them. Bon Appétit!  
      </div>

      <div className={styles.text7}>
        Destroy the wall
      </div>
    </div>
  )
}

export default Page46