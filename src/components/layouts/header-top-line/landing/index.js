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
            href="https://www.digitalax.xyz/whitepaper">
              R&D
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
            href="https://drive.google.com/file/d/1zG8h4GnodW7uWm_OsUY3g4I4RpOx6bMH/view?usp=sharing" target="_blank">
              WhitePaper
            </a>
          </li>
          <li>
            <a style={linkStyle}
            href="https://staking.digitalax.xyz" target="_blank">
              Staking
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LandingHeader;