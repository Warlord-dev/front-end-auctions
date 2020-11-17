import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListSocialNetworks from '@components/layouts/footer/list-social-networks';
import {
  Twitter, Medium, Telegram, Github, Instagram,
} from '@constants/icons-constants';
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
    item: '',
    name: 'website',
  },
  {
    item: '',
    name: 'linkedIn',
  },
];

const Header = ({
  designerPhoto, descriptionDesigner, designerSocialMedia,
  designerCountryFlagIcon, designerCountry, designerName,
}) => {

  const socialMedia = designerSocialMedia.reduce((accumulator, item) => {
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
    <section className={styles.wrapper}>
      <img className={styles.photo} src={designerPhoto} alt="flag" />
      <div>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{designerName}</p>
          <div className={styles.countryWrapper}>
            {designerCountryFlagIcon && <img className={styles.flag} src={designerCountryFlagIcon} alt={designerCountry} />}
            <span className={styles.designerCountry}>{designerCountry}</span>
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          {descriptionDesigner.map((item) => <p key={item} className={styles.descriptionItem}>{item}</p>)}
        </div>
        <ListSocialNetworks list={socialMedia} />
      </div>
    </section>
  );
};

Header.propTypes = {
  designerName: PropTypes.string,
  designerPhoto: PropTypes.string,
  descriptionDesigner: PropTypes.string,
  designerSocialMedia: PropTypes.array,
  designerCountryFlagIcon: PropTypes.string,
  designerCountry: PropTypes.string,
};

Header.defaultProps = {
  designerName: '',
  designerPhoto: '',
  descriptionDesigner: '',
  designerSocialMedia: [],
  designerCountryFlagIcon: '',
  designerCountry: '',
};

export default memo(Header);
