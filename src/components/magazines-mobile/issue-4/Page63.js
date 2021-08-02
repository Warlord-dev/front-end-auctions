import React from 'react'
import styles from './page63.module.scss'
import Link from 'next/link';

const Page63 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/69_70/image1.png" className={styles.image3}/> 
      <p className={styles.text3}> Blue Averan</p> 
      <p className={styles.text4}>
I’m Tiago Filipe (or James Phillip). I’m a self taught  3D artist living in Portugal. I love fashion, but I don’t have any background in it.
 <br/><br/>
I discovered DazStudio in 2018 and, since I didn’t own many assets, I decided to learn how to create 3D clothes to use in my characters when creating art. I've learnt Marvelous Designer and Autodesk Maya to create 3D Outfits for DazStudio.
<br/><br/>
Now I'm a PA (Published Artist) at Renderosity always looking to improve my store with new outfits. I look for inspiration in the web in sites like Pinterest and sometimes i try to recreate designs from known Fashion Designers like Dior, Versace or Alexander McQueen</p> 
      <Link href="https://www.instagram.com/tiago.filipe.silva/?hl=en">
        <a target="_blank">
        <p className={styles.text5}>Tiago Filipe</p>  
        </a>
      </Link>
    </div>
  )
}

export default Page63