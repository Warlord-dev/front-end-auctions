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
        <h3 className={styles.subtitle}>CROSS DIGI-FIZZY REALMS</h3>
        <h3 className={styles.subtitle}>HYBRID FASHION NFTs </h3>
        <h3 className={styles.subtitle}>UNLOCKABLE CONTENT</h3>
      </div>
    </div>
  )
}

export default TextContent