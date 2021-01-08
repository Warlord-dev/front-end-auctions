import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
import {
  Twitter,
  Medium,
  Telegram,
  Github,
  Instagram,
  Website,
  LinkedIn,
} from '@constants/icons-constants';
import { DESIGNERS } from '@constants/router-constants';
import kebabCase from 'lodash.kebabcase';
import ListSocialNetworks from '@components/layouts/footer/list-social-networks';
import styles from './styles.module.scss';

const SOCIAL_MEDIA = [
  {
    item: <Twitter />,
    name: 'twitter',
  },
  {
    item: <Medium />,
    name: 'medium',
  },
  {
    item: <Telegram />,
    name: 'telegram',
  },
  {
    item: <Github />,
    name: 'github',
  },
  {
    item: <Instagram />,
    name: 'instagram',
  },
  {
    item: <Website />,
    name: 'website',
  },
  {
    item: <LinkedIn />,
    name: 'linkedIn',
  },
];

const DesignerCard = ({
  photo, name, country, countryIcon, socials,
}) => {
  const socialMedia = socials.reduce((accumulator, item) => {
    SOCIAL_MEDIA.forEach((row) => {
      if (item.name === row.name) {
        accumulator.push({
          item: row.item,
          href: item.href,
        });
      }
    });
    return accumulator;
  }, []);

  return (
    <div className={cn(styles.wrapper)}>
      <Link href={`${DESIGNERS}${kebabCase(name)}`}>
        <a>
          <img src={photo} alt={name} className={styles.photo} />
        </a>
      </Link>
      <Link href={`${DESIGNERS}${kebabCase(name)}`}>
        <a>
          <div className={styles.name}>{name}</div>
        </a>
      </Link>
      <div className={styles.country}>
        <img src={countryIcon} alt={country} className={styles.flagIcon} />
        <div className={styles.countryName}>{country}</div>
      </div>
      <div className={styles.social}>
        <ListSocialNetworks list={socialMedia} />
      </div>
    </div>
  );
};

DesignerCard.propTypes = {
  photo: PropTypes.string,
  socials: PropTypes.array,
  name: PropTypes.string,
  countryIcon: PropTypes.string,
  country: PropTypes.string,
};

DesignerCard.defaultProps = {
  photo: '',
  socials: [],
  name: '',
  countryIcon: '',
  country: '',
};

export default memo(DesignerCard);
