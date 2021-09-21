import React, { useState } from 'react'
import styles from './styles.module.scss'

const MobileViewer = props => {
  return (
    <>
      <div className={styles.mobileViewerWrapper}>
        <img src='/images/mobile-background.png' className={styles.background}/>
        <div className={styles.textWrapper}>
          DIGIFIZZY is the first immersive metaverse magazine and to make the experience as immersive as possible we mod a lot of rich graphics together! 
          <br /><br />
          Unfortunately that means that it’s not so compatible with mobile— in fact viewing it on mobile is kind of a pain!
          <br /><br />
          So, with that said, it’s best to view on computer!
          <br /><br />
          Open the magazine when your at a desktop/laptop and start getting lost in the pages!          
        </div>
      </div>

    </>
  )
}

export default MobileViewer