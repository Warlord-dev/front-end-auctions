import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ListSocialNetworks from './list-social-networks';
import styles from './styles.module.scss';

const dataLeftList = [
  {
    item: 'FAQs',
    href: 'https://digitalax.gitbook.io/digitalax/faq',
  },
  {
    item: 'Digital Fashion Auctions',
    href: 'https://digitalax.gitbook.io/digitalax/tools-functionality/auction',
  },
  {
    item: 'Staking Rewards',
    href: 'https://digitalax.gitbook.io/digitalax/tools-functionality/staking',
  },
];

const dataCenterList = [
  {
    item: 'Documentation',
    href: 'https://digitalax.gitbook.io/digitalax/',
  },
  {
    item: 'Project Overview',
    href: 'https://digitalax.s3.us-east-2.amazonaws.com/DIGITALAXProjectOverview.pdf',
  },
  {
    item: 'Monavaile Executive Summary',
    href: '',
  },
  {
    item: 'We are Hiring!',
    href: '/documents/DIGITALAX Overview and Careers.pdf',
  },
];


const Footer = ({ className, leftList, centerList }) => (
  <footer className={cn(className, styles.wrapper)}>
    <div className={styles.inner}>
      {!!leftList.length && (
        <div>
          {leftList.map(({ item, href }) => (
            <a className={styles.leftItem} key={item} href={href} target="_blank" rel="noreferrer">
              {item}
            </a>
          ))}
        </div>
      )}
      <div>
        {centerList.map(({ item, href }) => (
          <a className={styles.centerItem} key={item} href={href} target="_blank" rel="noreferrer">
            {item}
          </a>
        ))}
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
