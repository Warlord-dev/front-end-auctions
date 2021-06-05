import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';

const LandingHeader = props => {
  const { textColor } = props
  const linkStyle = {
    color: textColor || 'white',
    borderBottomColor: textColor || 'white'
  }
  return (
    <div className={styles.navigationBar}>
      <div className={styles.branding}>
        <a href="https://www.digitalax.xyz/homepage">
          <span className={styles.brand}
          style={{
            color: textColor || 'white'
          }}>Digitalax </span>
          <span className={styles.subBrand}>The Digital Fashion Engine</span>
        </a>
      </div>

      <div className={styles.listLink}>
        <ul>
          <li>
            <a style={linkStyle}
            href="https://blog.digitalax.xyz/">
              Blog Updates
            </a>
          </li>
          <li>
            <a style={linkStyle}
            href="https://www.digitalax.xyz/marketplace">
              Marketplace
            </a>
          </li>
          <li>
            <a style={linkStyle}
            href="https://www.digitalax.xyz/whitepaper">
              R&D
            </a>
          </li>
          <li>
            <a style={linkStyle}
            href="https://staking.digitalax.xyz" target="_blank">
              Staking
            </a>
          </li>
          <li>
            <a style={linkStyle}
            href="https://espa.digitalax.xyz" target="_blank">
              Esports Platforms
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LandingHeader;