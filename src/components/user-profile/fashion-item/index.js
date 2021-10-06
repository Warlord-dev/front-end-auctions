import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
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
  console.log('animation: ', animation)
  if ((!image || image == '') && (!animation || animation == '') && tokenURI && tokenURI != '') {
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
        ? <LazyLoad style={{
            width: '100%',
            height: '100%'
          }}>
            <video autoPlay muted loop className={styles.videoItem}>
              <source src={animation} type='video/mp4' />
            </video>
          </LazyLoad>
        : (
          image && image != ''
          ?
            <LazyLoad style={{
              width: '100%',
              height: '100%'
            }}>
              <img src={image} className={styles.photoItem} />
            </LazyLoad>
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