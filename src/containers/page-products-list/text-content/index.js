import React, { FunctionComponent } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss';

const TextContent = () => {
  return (
    <div className={styles.textContentContainer}>
      <h1 className={styles.title}>
        {' '}
        MOD YOUR WAY INTO METAVERSE FASHION & GAMING{' '}
      </h1>
      <div className={styles.subtitleBar}>
        <h3 className={styles.subtitle}>STAKED NFTs FOR $MONA</h3>
        <h3 className={styles.subtitle}>INTEROPERABLE UTILITY</h3>
        <h3 className={styles.subtitle}>FRACTIONAL NFT GARMENTS</h3>
      </div>
    </div>
  )
}

export default TextContent