import React from 'react'
import styles from './styles.module.scss'

const FashionItem = props => {
  const {
    className,
    animation,
    image
  } = props
  return (
    <div className={[styles.wrapper, className].join(' ')}>
      {
        animation && animation != ''
        ? <video autoPlay muted loop className={styles.videoItem}>
            <source src={animation} type='video/mp4' />
        </video>
        : (
          image && image != ''
          ?
            <img src={image} className={styles.photoItem} />
          : <div></div>
        )
      }
      {
        
      }
    </div>
  )
}

export default FashionItem