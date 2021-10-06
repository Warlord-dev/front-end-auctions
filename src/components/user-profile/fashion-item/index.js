import React from 'react'
import styles from './styles.module.scss'

const FashionItem = props => {
  const {
    className,
    animation,
    image,
    onClickViewFashion
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
      <button
        className={[styles.viewFashion].join(' ')}
        onClick={onClickViewFashion}
      >
        <img src={'/images/metaverse/pinkb.png'} />
        <div>VIEW FASHION</div>
      </button>
    </div>
  )
}

export default FashionItem