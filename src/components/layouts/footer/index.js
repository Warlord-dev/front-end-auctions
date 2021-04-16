import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import ListSocialNetworks from './list-social-networks';
import styles from './styles.module.scss';
import LandingFooter from './landing';

const dataLeftList = [
  {
    item: 'FAQs',
    href: 'https://digitalax.gitbook.io/digitalax/faq',
  },
  {
    item: 'Digital Fashion Auctions',
    href: 'https://marketplace.digitalax.xyz/',
  },
  {
    item: 'Staking',
    href: 'https://staking.digitalax.xyz',
  },
];

const dataCenterList = [
  {
    item: 'Documentation',
    href: 'https://digitalax.gitbook.io/digitalax/',
  },
  {
    item: 'Whitepaper',
    href: 'https://drive.google.com/file/d/1zG8h4GnodW7uWm_OsUY3g4I4RpOx6bMH/view?usp=sharing',
  },
  {
    item: 'Read About ESPA',
    href: 'https://drive.google.com/file/d/1oFiBGBr_CN0-mUuuEp_g6wDBr-mNA0Uh/view?usp=sharing',
  },
];

const Footer = ({ className, leftList, centerList }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const isLandingPage = pathname === '/';

  return isLandingPage ? (<LandingFooter />)
  : (
  <footer className={cn(className, styles.wrapper)}>
    <div className={styles.inner}>
      {!!leftList.length && (
        <div style={{ marginBottom: '15px' }}>
          {leftList.map(({ item, href }) => (
            <a className={styles.leftItem} key={item} href={href} target="_blank" rel="noreferrer">
              {item}
            </a>
          ))}
        </div>
      )}
      <div style={{ marginBottom: '15px' }}>
        {centerList.map(({ item, href }) => (
          <a className={styles.centerItem} key={item} href={href} target="_blank" rel="noreferrer">
            {item}
          </a>
        ))}
      </div>
      <ListSocialNetworks />
    </div>
  </footer> 
)
};

Footer.propTypes = {
  className: PropTypes.string,
  leftList: PropTypes.array,
  centerList: PropTypes.array,
};

Footer.defaultProps = {
  className: '',
  leftList: dataLeftList,
  centerList: dataCenterList,
};

export default memo(Footer);
