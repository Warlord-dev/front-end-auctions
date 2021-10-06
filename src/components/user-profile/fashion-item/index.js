import React, { useState } from 'react'
import axios from 'axios'
import styles from './styles.module.scss'

const FashionItem = props => {
  const {
    className,
    animation,
    image,
    tokenURI,
    onClickViewFashion
  } = props
  const [imageUrl, setImageUrl] = useState(null)
  if ((!image || image == '') && (!animation || animation == '')) {
    axios.get(tokenURI).then(tokenData => {
      const { data } = tokenData
      console.log('data: ', data)
      setImageUrl(data.image_url)
    })
  }
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
        imageUrl && 
        <img src={imageUrl} className={styles.photoItem} />
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