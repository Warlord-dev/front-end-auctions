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
    href: '',
  },
  {
    item: <Medium />,
    href: '',
  },
  {
    item: <Telegram />,
    href: '',
  },
  {
    item: <Github />,
    href: '',
  },
  {
    item: <Instagram />,
    href: '',
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
