/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Youtube, Twitter, Medium, Telegram, Instagram, Github, Discord,
} from '@constants/icons-constants';
import styles from './styles.module.scss';

const SOCIAL_MEDIA = [
  {
    item: <Youtube />,
    href: 'https://www.youtube.com/channel/UCE26XV44aaYe1zlPnDbiz5Q',
  },
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
    item: <Instagram />,
    href: 'https://www.instagram.com/_digitalax',
  },
  {
    item: <Github />,
    href: 'https://github.com/DIGITALAX',
  },
  {
    item: <Discord />,
    href: 'https://discord.com/invite/DKbSqRGtKv',
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
