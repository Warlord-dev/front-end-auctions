import React from 'react'
import styles from './page55.module.scss'
import Link from 'next/link';

const Page55 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="/magazine/3/images/61_62/image1.png" className={styles.image1}/>
      <img src="/magazine/3/images/61_62/image3.png" className={styles.image3}/>
      <p className={styles.text2}>BUTTERFLY</p>   
      <Link href="https://www.instagram.com/the_world_of_nabi/?hl=en">
        <a target="_blank">
          <p className={styles.text3}>NABI</p>   
        </a>
      </Link>
      <p className={styles.text4}>Nabi, based out of Mumbai, India, is a queer digital artist, embroidery designer and multi-disciplinary creator that straddles between hyper-reality and traditional craftsmanship. Nabi has primarily built his universe based on tribal and indigenous mythology, legends and his love for pop culture which played a very important role in paving a direction for his visual narrative and the story telling aspect in his works. His deviation towards otherworlds is very prominent and the idea of escaping to these worlds became his major passion and interest. He uses various medias that have become a vital component in his practice. Nabi excels in the practice of merging digital art, illustration and photography with his in-depth knowledge of traditional hand embroidery. Nabi has worked with global powerhouses in their own fields of art, drag, technology and fashion, including; v magazine violet chachki sophia, the robot alok vaid menon. </p>     
    </div>
  )
}

export default Page55