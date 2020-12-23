import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const DesignerCard = ({
  photo, name, country, countryIcon,
  // socials,
}) => (
  <div className={cn(styles.wrapper)}>
    <img src={photo} alt={name} className={styles.photo} />
    <div>{name}</div>
    <div className={styles.country}>
      <img src={countryIcon} alt={country} className={styles.flagIcon} />
      <div>{country}</div>
    </div>
    <div className={styles.social}>
      {/* {socials.map((item, index) => {
        <div />;
      })} */}
    </div>
  </div>
);

DesignerCard.propTypes = {
  photo: PropTypes.string,
  // socials: PropTypes.array,
  name: PropTypes.string,
  countryIcon: PropTypes.string,
  country: PropTypes.string,
};

DesignerCard.defaultProps = {
  photo: '',
  // socials: [],
  name: '',
  countryIcon: '',
  country: '',
};

export default memo(DesignerCard);
