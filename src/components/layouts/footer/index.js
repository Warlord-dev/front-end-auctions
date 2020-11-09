import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ListSocialNetworks from './list-social-networks';
import styles from './styles.module.scss';

const dataLeftList = [
  {
    item: 'FAQs',
    href: '',
  },
  {
    item: 'Digital Fashion Auctions',
    href: '',
  },
  {
    item: 'Staking Rewards',
    href: '',
  },
];

const dataCenterList = [
  {
    item: 'Documentation',
    href: '',
  },
  {
    item: 'Project Overview',
    href: '',
  },
  {
    item: 'Monavaile Executive Summary',
    href: '',
  },
];


const Footer = ({ className, leftList, centerList }) => (
  <footer className={cn(className, styles.wrapper)}>
    <div className={styles.inner}>
      {!!leftList.length && (
        <div>
          {leftList.map(({ item, href }) => <a className={styles.leftItem} key={item} href={href}>{item}</a>)}
        </div>
      )}
      <div>
        {centerList.map(({ item, href }) => <a className={styles.centerItem} key={item} href={href}>{item}</a>)}
      </div>
      <ListSocialNetworks />
    </div>
  </footer>
);

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
