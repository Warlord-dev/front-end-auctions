/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Twitter, Medium, Telegram, Github, Instagram,
} from '@constants/icons-constants';
import styles from './styles.module.scss';

const SOCIAL_MEDIA = [
  {
    item: <Twitter />,
    href: 'https://twitter.com/DIGITALAX_',
  },
  {
    item: <Medium />,
    href: 'https://medium.com/@digitalax',
  },
  {
    item: <Telegram />,
    href: 'https://t.me/digitalaxTG',
  },
  {
    item: <Github />,
    href: 'https://github.com/DIGITALAX',
  },
  {
    item: <Instagram />,
    href: 'https://www.instagram.com/digitalax_',
  },
];

const ListSocialNetworks = ({ list }) => (
  <ul>
    {list.map(({ item, href }, index) => <a className={styles.item} key={index} href={href} target="_blank" rel="noreferrer">{item}</a>)}
  </ul>
);

ListSocialNetworks.propTypes = {
  list: PropTypes.array,
};

ListSocialNetworks.defaultProps = {
  list: SOCIAL_MEDIA,
};


export default memo(ListSocialNetworks);
