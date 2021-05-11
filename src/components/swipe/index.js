import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './styles.module.scss'
import {Carousel} from 'react-responsive-carousel'

export default function swipePage({ children }) {

  return (
    <div className={styles.wrapper}>
      <Carousel
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      autoPlay={false}
      autoFocus={false}
      infiniteLoop={false}
      >
      {children}
      </Carousel>
    </div>
  )
}
