import React from 'react';
import cn from 'classnames';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './styles.module.scss';

const BottomLine = (props) => {
  const items = [
    'Skins',
    'Mona price',
    'Digitalax new post title',
    'Drop product title',
    'Digifizzy feature'
  ];

  return (
    <div className={styles.bottomLine}>
      <Carousel centerMode centerSlidePercentage={30} autoPlay showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
        {items.map((item, index) => <div className={styles.bottomItem} key={index}>{item}</div>)}
      </Carousel>
    </div>
  );
};

export default BottomLine;
