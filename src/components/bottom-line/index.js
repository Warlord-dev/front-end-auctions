import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const BottomLine = (props) => {
  return (
    <div className={cn(styles.bottomLine, props.transparent ? styles.transparent : '')}>
      <div>skins</div>
      <div>mona price</div>
      <div>digitalax new post title</div>
      <div>drip product title</div>
      <div>digifizzy feature</div>
    </div>
  );
};

export default BottomLine;
