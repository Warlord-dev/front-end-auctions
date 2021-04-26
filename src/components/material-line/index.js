/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTokenInfo } from '@hooks/token.info.hooks';
import { createPreviewURL } from '@services/imgix.service';
import { openPreviewMaterialModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const MaterialLine = ({ className, clothesId, item: { tokenUri, id }, headerTitle }) => {
  const dispatch = useDispatch();
  const tokenInfo = useTokenInfo(tokenUri, [tokenUri]);

  const doeField = ['Degree of Exclusivity', 'Degrees of Exclusivity'];
  const artistField = ['Artist'];

  const artist = tokenInfo
    ? (
        tokenInfo.attributes.find(
          (s) => artistField.findIndex((txt) => s.trait_type === txt) >= 0
        ) || { value: '' }
      ).value
    : '';
  const rarity = tokenInfo
    ? (
        tokenInfo.attributes.find(
          (s) => doeField.findIndex((txt) => s.trait_type === txt) >= 0
        ) || { value: '' }
      ).value
    : '';

  const getArtistTwitter = (artist) => {
    switch (artist) {
      case 'Defaced Studio':
        return 'https://twitter.com/Defacedstudio';
      case 'Emotionull':
        return 'https://twitter.com/em0tionull';
      case 'Jonathan Wolfe':
        return 'https://twitter.com/JonathanWWolfe';
      case 'Sturec':
        return 'https://twitter.com/sturec5';
      case 'Bryan Brinkman':
        return 'https://twitter.com/bryanbrinkman';
      case 'Odious':
        return 'https://twitter.com/todayodious';
      case 'GeorgeBoya':
        return 'https://twitter.com/boyageorge';
      case 'Vansdesign':
        return 'https://twitter.com/VansDesign_';
      case 'SamJ Studios':
        return 'https://twitter.com/samjstudios';
      case 'Zaid Kirdsey':
        return 'https://twitter.com/Jruffhouse';
      case 'Toby Evans':
        return 'https://twitter.com/ZOMEWORK';
      case 'VIII':
        return 'https://twitter.com/visionofviii';
      case 'Retrocoin':
        return 'https://twitter.com/RETROCOlN';
      case 'SphericalArt':
        return 'https://twitter.com/spherical_art';
      case 'yonFrula':
        return 'https://twitter.com/botfrula';
      case 'Osinachi':
        return 'https://twitter.com/osinachiart';
      case 'ManWithNoName':
        return 'https://twitter.com/_Man_WithNoName';
      case 'NASA':
        return 'https://twitter.com/NASA';
    }
    return 'https://twitter.com/robnessofficial';
  };

  const isVideo = (info) => {
    switch (info.name) {
      case 'KERO':
      case 'Stripes':
      case 'Rainbow Wiggle':
      case 'Waves':
      case 'Clouds':
      case 'PRIMA FLORA':
      case 'Saturn':
      case 'Mars':
      case 'Earth':
        return true;
    }
    return false;
  };

  const renderArtistName = (name) => {
    if (!name) return 'ROBNΞSS';
    else {
      switch (name) {
        case 'SphericalArt':
          return 'Spherical Art';
        case 'ManWithNoName':
          return 'ManWith NoName';
      }
      return name;
    }
  };

  return (
    <ul className={className}>
      <li className={styles.item}>
        <div className={styles.imgWrapper}>
          {tokenInfo && tokenInfo.image ? (
            isVideo(tokenInfo) ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
                onClick={() =>
                  dispatch(
                    openPreviewMaterialModal({
                      tokenImage: tokenInfo.image,
                      isVideo: true,
                    })
                  )
                }
              >
                <source src={tokenInfo.image} type="video/mp4" />
              </video>
            ) : (
              <img
                className={styles.img}
                src={createPreviewURL(tokenInfo.image)}
                alt={tokenInfo && tokenInfo.name}
                onClick={() => dispatch(openPreviewMaterialModal({ tokenImage: tokenInfo.image }))}
              />
            )
          ) : null}
          <span className={styles.textForImg}>{id}</span>
        </div>
        <div className={styles.addressWrapper}>
          <p className={styles.name}>{tokenInfo && tokenInfo.name}</p>
          <p className={styles.address}>{tokenInfo && tokenInfo.description}</p>
        </div>
        {headerTitle.includes('Artist') && (
          <a className={styles.priceWrapper} href={getArtistTwitter(artist)}>
            <div className={styles.price}>
              <div className={styles.textCenter}>{renderArtistName(artist)}</div>
              <img src="/images/twitter.svg" className={styles.twitterIcon} />
            </div>
          </a>
        )}
        <span className={styles.estimate}>
          <div className={styles.estimateInnerGray}>{rarity || 'Exclusive'}</div>
        </span>
      </li>
    </ul>
  );
};

MaterialLine.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
  clothesId: PropTypes.string,
  headerTitle: PropTypes.array
};

MaterialLine.defaultProps = {
  className: '',
  clothesId: 1,
};

export default memo(MaterialLine);
