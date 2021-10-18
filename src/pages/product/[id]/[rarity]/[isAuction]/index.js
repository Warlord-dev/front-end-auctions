import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from './styles.module.scss';

import ImageCard from '@components/image-card';
import InfoCard from '@components/info-card';
import Container from '@components/container';
import UserList from '@components/user-list';
import FashionList from '@components/fashion-list';
import BannerBar from '@components/banner-bar';
import PriceCard from '@components/price-card';

import {
  getDigitalaxMarketplaceOffer,
  getDigitalaxMarketplaceV2Offer,
  getGarmentByAuctionId,
  getGarmentByCollectionId,
  getGarmentV2ByAuctionId,
  getGarmentV2ByCollectionId,
  getDigitalaxNFTStakersByGarments,
  getGuildWhitelistedNFTStakersByGarments,
} from '@services/api/apiService';

import digitalaxApi from '@services/api/espa/api.service';

import { getChainId, getExchangeRateETH, getMonaPerEth } from '@selectors/global.selectors';
import { getAccount } from '@selectors/user.selectors';
import { getUser } from '@helpers/user.helpers';
import { getRarity, reviseUrl } from '@utils/helpers';
import config from '@utils/config';
import {
  openBespokeModal,
  openBidHistoryModal,
  openPurchaseHistoryModal,
  openCurrentWearersModal,
} from '@actions/modals.actions';

import globalActions from '@actions/global.actions';

import secondDesignerData from 'src/data/second-designers.json';
import { getCollectionGroupById } from '@services/api/apiService';

const POLYGON_CHAINID = 0x89;

const getAllResultsFromQuery = async (query, resultKey, chainId, owner) => {
  let lastID = '';
  let isContinue = true;
  const fetchCountPerOnce = 1000;

  const resultArray = [];
  while (isContinue) {
    const result = await query(chainId, owner, fetchCountPerOnce, lastID);
    if (!result[resultKey] || result[resultKey].length <= 0) isContinue = false;
    else {
      resultArray.push(...result[resultKey]);
      if (result[resultKey].length < fetchCountPerOnce) {
        isContinue = false;
      } else {
        lastID = result[resultKey][fetchCountPerOnce - 1]['id'];
      }
    }
  }

  return resultArray;
};

const fetchTokenUri = async (tokenUri) => {
  return fetch(tokenUri)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

const Product = ({ pageTitle }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id, rarity, isAuction } = router.query;
  const chainId = useSelector(getChainId);
  const [product, setProduct] = useState({});
  const [offer, setOffer] = useState({});
  const [tokenIds, setTokenIds] = useState([]);
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [secondDesigners, setSecondDesigners] = useState([]);
  const monaPerEth = useSelector(getMonaPerEth);
  const exchangeRate = useSelector(getExchangeRateETH);
  const [loveCount, setLoveCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [owners, setOwners] = useState([]);
  const [sourceType, setSourceType] = useState([]);
  const [lookIds, setLookIds] = useState([]);
  const [lookInspo, setLookInspo] = useState([]);
  const fashionData = [
    {
      title: 'DeFi Staking Functionality',
      description: `All NFTs can be staked in the DIGITALAX NFT Staking Contracts on Polygon for $MONA yield. This forms part of the broader Fashion x DeFi merger that DIGITALAX has undertaken to bring greater utility to metaversal fashion and also welcome multitudes more into web3 and DeFi. 

      What if you could earn more from what you wear? Wear to DeFi lets you put your fashion to work for you. We are melting the centralised exploitative crown to weave the fabric of a generative ecosystem.            
      `,
    },
    {
      title: 'Fractional Garment ERC-1155 Open Source Pattern',
      description: `Fractional Garment Ownership (FGO) sets forth the standard and dress code for the manufacture of digital fashion along the content supply chain. FGO leverages ERC Protocol standards across the Ethereum Blockchain and Polygon (Matic Network) for breaking down a master ERC-721 digital garment into its programmable and composable ERC-1155 elements of materials, patterns and textures.

      Here, we are using a variant on the ERC-998 standard, where each ERC-721 token can hold a balance of ERC-1155 NFTs. We coin this respectively the Parent and Child NFTs. This allows for other designers to leverage off of the open source digital libraries, incorporating the patterns, materials and textures into their master garments.`,
    },
    {
      title: '3D Model File Included',
      description: `All of the DIGITALAX digital fashion garment and accessory ERC-721 NFTs are backed by the underlying 3D model FBX file, stored in IPFS. This forms part of the platform’s broader pursuit for decentralising content distribution and access to it. The FBX file is one of the most popular and widely used 3D data interchange formats between 3D editors and game engines. There are still efficiency problems that exist with it, which DIGITALAX is working to solve through it’s DASH File Format architecture. `,
    },
  ];

  const sourceTypeDescription = {
    'AR FILTER': 'You can wear and view this fashion in AR',
    'DIGITAL DRESSING': 'Get digitally dressed in this fashion',
    'IN-GAME': 'You can take this fashion in-game',
    PHYSICAL: 'This fashion includes the physical counterpart',
  };

  const account = useSelector(getAccount);
  const user = getUser();
  const secretKey = user ? user.randomString : null;

  const getOwners = async (garments, itemSold, users) => {
    if (!garments) return [];
    console.log('garments: ', garments);
    const soldGarments = garments.slice(0, itemSold).map((garment) => garment.id);
    // get digitalax NFTs on Mainnet
    const digitalaxAllNFTStakersByGarments = await getAllResultsFromQuery(
      getDigitalaxNFTStakersByGarments,
      'digitalaxNFTStakers',
      POLYGON_CHAINID,
      soldGarments,
    );

    const guildAllNFTStakersByGarments = await getAllResultsFromQuery(
      getGuildWhitelistedNFTStakersByGarments,
      'guildWhitelistedNFTStakers',
      POLYGON_CHAINID,
      soldGarments.map((item) => config.DTX_ADDRESSES['matic'].toLowerCase() + '-' + item),
    );

    const digitalaxStakedGarments = {};
    digitalaxAllNFTStakersByGarments
      .filter((item) => item.garments && item.garments.length > 0)
      .map((staker) => {
        staker.garments.forEach((garment) => {
          digitalaxStakedGarments[garment.id] = staker.id;
        });
      });

    guildAllNFTStakersByGarments
      .filter((item) => item.garments && item.garments.length > 0)
      .map((staker) => {
        staker.garments.forEach((garment) => {
          digitalaxStakedGarments[garment.id.split('-')[1]] = staker.id;
        });
      });

    const owners = garments.slice(0, itemSold).map((garment) => {
      const owner = garment.owner.toLowerCase();
      return digitalaxStakedGarments && digitalaxStakedGarments[garment.id]
        ? digitalaxStakedGarments[garment.id]
        : owner;
    });
    const arranged = owners.filter((item, pos) => {
      return owners.indexOf(item) == pos;
    });
    return arranged.map((garment) => {
      const user = users.find((item) => item.wallet && item.wallet.toLowerCase() == garment) || {};
      return {
        ...user,
      };
    });
  };

  useEffect(() => {
    const fetchGarmentV2ByID = async () => {
      const users = await digitalaxApi.getAllUsersName();
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, 15);
      const ids = [];
      digitalaxCollectionGroup.auctions.forEach((auction) => ids.push(auction.id));
      digitalaxCollectionGroup.collections.forEach((collection) => ids.push(collection.id));
      setLookIds(ids);
      dispatch(globalActions.setAllUsers(users));

      // if (id.indexOf('v1') >= 0) {
      //   const v1Id = id.split('-')[1];
      //   const { digitalaxGarmentCollection } = await getGarmentByCollectionId(chainId, v1Id);
      //   if (digitalaxGarmentCollection.id) {
      //     const { digitalaxMarketplaceOffers } = await getDigitalaxMarketplaceOffer(
      //       chainId,
      //       digitalaxGarmentCollection.id,
      //     );
      //     console.log('digitalaxMarketplaceOffers: ', digitalaxMarketplaceOffers);
      //     setOwners(
      //       await getOwners(
      //         digitalaxMarketplaceOffer[0].garmentCollection?.garments,
      //         digitalaxMarketplaceOffers[0].amountSold,
      //         users,
      //       ),
      //     );

      //     // garments: getGarmentsWithOwnerInfo(offer.garmentCollection.garments, users),
      //     setTokenIds(
      //       digitalaxMarketplaceOffers[0].garmentCollection?.garments?.map((garment) => garment.id),
      //     );
      //     setOffer({
      //       id: digitalaxMarketplaceOffers[0].id,
      //       primarySalePrice: digitalaxMarketplaceOffers[0].primarySalePrice,
      //       startTime: digitalaxMarketplaceOffers[0].startTime,
      //       endTime: digitalaxMarketplaceOffers[0].startTime,
      //       amountSold: digitalaxMarketplaceOffers[0].amountSold,
      //       totalAmount: 64,
      //     });
      //     setProduct({
      //       id: digitalaxGarmentCollection.id,
      //       garment: digitalaxGarmentCollection.garments[0],
      //       designer: null,
      //       developer: null,
      //     });
      //   }
      // } else if (id) {
      if (!parseInt(isAuction)) {
        const children = [];

        const { digitalaxGarmentV2Collection } = await getGarmentV2ByCollectionId(chainId, id);
        if (digitalaxGarmentV2Collection.id) {
          const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offer(
            chainId,
            digitalaxGarmentV2Collection.id,
          );
          const additionalSources = [];

          if (digitalaxGarmentV2Collection.garments[0].tokenUri) {
            const info = await fetchTokenUri(digitalaxGarmentV2Collection.garments[0].tokenUri);
            for (let i = 1; i <= 4; i += 1) {
              if (info[`image_${i}_url`]) {
                additionalSources.push({
                  url: info[`image_${i}_url`],
                  type: 'image',
                });
              }
            }
            for (let i = 1; i <= 4; i += 1) {
              if (info[`animation_${i}_url`]) {
                additionalSources.push({
                  url: info[`animation_${i}_url`],
                  type: 'animation',
                });
              }
            }
          }

          if (digitalaxGarmentV2Collection.garments[0].children.length) {
            digitalaxGarmentV2Collection.garments[0].children.forEach(async (child) => {
              const info = await fetchTokenUri(child.tokenUri);
              console.log({ info });
              children.push({
                ...info,
                id: child.id.split('-')[1],
              });
            });
          }

          console.log('digitalaxMarketplaceV2Offers: ', digitalaxMarketplaceV2Offers);
          setOwners(
            await getOwners(
              digitalaxMarketplaceV2Offers[0].garmentCollection?.garments,
              digitalaxMarketplaceV2Offers[0].amountSold,
              users,
            ),
          );
          setTokenIds(
            digitalaxMarketplaceV2Offers[0].garmentCollection?.garments?.map(
              (garment) => garment.id,
            ),
          );
          setOffer({
            id: digitalaxMarketplaceV2Offers[0].id,
            primarySalePrice: digitalaxMarketplaceV2Offers[0].primarySalePrice,
            startTime: digitalaxMarketplaceV2Offers[0].startTime,
            endTime: digitalaxMarketplaceV2Offers[0].endTime,
            amountSold: digitalaxMarketplaceV2Offers[0].amountSold,
            totalAmount: digitalaxMarketplaceV2Offers[0].garmentCollection?.garments?.length,
          });
          setProduct({
            id: digitalaxGarmentV2Collection.id,
            garment: digitalaxGarmentV2Collection.garments[0],
            children,
            additionalSources,
            designer: digitalaxGarmentV2Collection.designer,
            developer: digitalaxGarmentV2Collection.developer,
          });
        }
      } else {
        console.log('id: ', id)
        if (parseInt(id) > 4) {
          const { digitalaxGarmentV2Auction } = await getGarmentV2ByAuctionId(chainId, id);
          console.log('digitalaxGarmentV2Auction: ', digitalaxGarmentV2Auction)
          setTokenIds([digitalaxGarmentV2Auction.garment.id]);
          setProduct(digitalaxGarmentV2Auction);
        } else {
          const { digitalaxGarmentAuction } = await getGarmentByAuctionId(chainId, id);
          setTokenIds([digitalaxGarmentAuction.garment.id]);
          setProduct(digitalaxGarmentAuction);
        }
      }
    };
    // };
    fetchGarmentV2ByID();

    const secondDesigner = secondDesignerData.find((item) => {
      return item.id == id && item.rarity == rarity && item.isAuction == isAuction;
    });

    if (secondDesigner && secondDesigner.designer && secondDesigner.designer.length > 0) {
      const secondDesignersRes = []
      secondDesigner.designer.map(designerItem => {
        fetch(designerItem)
        .then((response) => response.json())
        .then((designerData) => {
          secondDesignersRes.push({
            name: designerData['Designer ID'],
            description: designerData['description'],
            image: designerData['image_url'],
          })
          setSecondDesigners(secondDesignersRes);
        });
      })
      
    } else {
      setSecondDesigners([]);
    }

    const fetchViews = async () => {
      const viewData = await digitalaxApi.getViews('product', id);
      setLoveCount(viewData && viewData[0] && viewData[0].loves ? viewData[0].loves.length : 0);
      setViewCount(viewData && viewData[0] && viewData[0].viewCount ? viewData[0].viewCount : 0);
    };

    const addViewCount = async () => {
      const data = await digitalaxApi.addView('product', id);
      if (data) {
        setViewCount(data.viewCount);
      }
    };

    fetchViews();
    addViewCount();
  }, []);

  useEffect(() => {
    if (product?.endTime) {
      getTimeFormat();
      setInterval(() => {
        getTimeFormat();
      }, 60000);
    }
    if (product?.garment?.name) {
      const fetchSourceType = async () => {
        const data = await digitalaxApi.getSourceType(product.garment.name);
        if (data?.sourceType) setSourceType(data.sourceType);
        if (isLookHakathon() && data?.LOOKNFTInspo) setLookInspo(data?.LOOKNFTInspo.split(','));
      };

      fetchSourceType();
    }
  }, [product]);

  const getPrice = () => {
    if (parseInt(isAuction) !== 1) return offer?.primarySalePrice;
    else return product.topBid;
  };

  const onHistory = () => {
    if (parseInt(isAuction) === 1) {
      dispatch(
        openBidHistoryModal({
          tokenIds,
        }),
      );
    } else {
      dispatch(
        openPurchaseHistoryModal({
          tokenIds,
          v1: id.includes('v1'),
        }),
      );
    }
  };

  const onBespokeBtn = () => {
    dispatch(openBespokeModal());
  };

  const getTimeFormat = () => {
    const timeStamp = Date.now();
    if (timeStamp > product.endTime * 1000) {
      return '00:00:00';
    } else {
      const offset = product.endTime * 1000 - timeStamp;
      const days = parseInt(offset / 86400000);
      const hours = parseInt((offset % 86400000) / 3600000);
      const minutes = parseInt((offset % 3600000) / 60000);
      setDays(`00${days}`.slice(-2));
      setHours(`00${hours}`.slice(-2));
      setMinutes(`00${minutes}`.slice(-2));
    }
  };

  const addLove = async () => {
    const data = await digitalaxApi.addLove(account, secretKey, 'product', id);
    if (data && data['success']) {
      setLoveCount(loveCount + 1);
    }
  };

  const onClickLove = () => {
    addLove();
  };

  const onClickSeeAllWearers = () => {
    dispatch(
      openCurrentWearersModal({
        tokenIds,
        v1: id.includes('v1'),
      }),
    );
  };

  const isLookHakathon = () => {
    return lookIds.includes(id);
  };

  return (
    <>
      <Head>
        {/* <title key="title">{pageTitle}</title> */}
        {/* <meta key="description" name="description" content={product?.garment?.description} />
        <meta property="og:site_name" content={`Skin Product - {${product?.garment?.name}} - Digitalax`} />
        <meta property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content={product?.garment?.name}
        />
        <meta
          key="og:description"
          property="og:description"
          content={product?.garment?.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={product?.garment?.image}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={product?.garment?.image} />
        <meta name="twitter:title" content={product?.garment?.name} />
        <meta name="twitter:description" content={product?.garment?.description} /> */}

        {/* <meta property="og:url" content={} />
        <meta name="twitter:url" content={} /> */}
      </Head>

      <div className={styles.wrapper}>
        <section className={styles.mainSection}>
          <Container>
            <div className={styles.body}>
              <div className={styles.mainBody}>
                <div className={styles.imageCardWrapper}>
                  {!isLookHakathon() ? (
                    <div className={styles.rarity}> {getRarity(parseInt(rarity))}</div>
                  ) : (
                    <div className={styles.lookTitle}>LOOK Hackathon</div>
                  )}
                  <ImageCard
                    data={product}
                    price={(getPrice() / 10 ** 18).toFixed(2)}
                    isAuction={!!parseInt(isAuction)}
                    disable={
                      (parseInt(isAuction) === 1 && Date.now() > product.endTime * 1000) ||
                      offer?.amountSold >= offer?.totalAmount
                    }
                    showButton={!isLookHakathon()}
                  />

                  {!!product?.children?.length && (
                    <>
                      <div className={styles.childrenDescription}>
                        Open Source{' '}
                        <a href="https://designers.digitalax.xyz/fractional/" target="_blank">
                          Fractional Garment Ownership
                        </a>
                      </div>
                      <div className={styles.childrenWrapper}>
                        {product.children.map((child) => {
                          return (
                            <a
                              href={`https://opensea.io/assets/matic/0x567c7b3364ba2903a80ecbad6c54ba8c0e1a069e/${child.id}`}
                              target="_blank"
                            >
                              {child.image_url ? (
                                <img src={reviseUrl(child.image_url)} />
                              ) : child.animation_url ? (
                                <video muted autoPlay loop>
                                  <source src={reviseUrl(child.animation_url)} />
                                </video>
                              ) : null}
                            </a>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
                <div className={styles.infoWrapper}>
                  <div className={styles.leftSection}>
                    <div className={styles.amount}>
                      {isLookHakathon() ? (
                        'React with Love to Vote'
                      ) : parseInt(isAuction) !== 1 ? (
                        <>
                          {offer?.amountSold} of {offer?.totalAmount}
                        </>
                      ) : (
                        <>{`${days}:${hours}:${minutes}`}</>
                      )}
                      <div className={styles.helper}>
                        <span className={styles.questionMark}>?</span>
                        <span
                          className={styles.description}
                          style={{ width: isLookHakathon() ? 170 : 300 }}
                        >
                          {!isLookHakathon() ? (
                            <>
                              You can also stake this NFT for yield + get the original source file.
                              Check <a href={`${window.location.pathname}#fashion_list`}>here</a>.
                            </>
                          ) : (
                            <>Please sign in to vote</>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className={styles.lovesWrapper}>
                      <button type="button" className={styles.loveButton} onClick={onClickLove}>
                        <img src="/images/like_icon.png" />
                      </button>

                      <div className={styles.likeCount}>
                        {loveCount}
                        <span>LOVES</span>
                      </div>
                      <img src="/images/view_icon.png" />
                      <div className={styles.viewCount}>
                        {viewCount}
                        <span>VIEWS</span>
                      </div>
                    </div>

                    <InfoCard>
                      <div className={styles.infoCard}>
                        <div className={styles.skinName}>
                          <div className={styles.text}> {product?.garment?.name} </div>
                        </div>
                        <div className={styles.description}>{product?.garment?.description}</div>
                      </div>
                    </InfoCard>
                    {!isLookHakathon() && !!sourceType.length && (
                      <div className={styles.mobileRightSection}>
                        {sourceType.map((st) => (
                          <div className={styles.item}>
                            <label className={styles.checkContainer}>
                              <input type="checkbox" className={styles.check} checked />
                              <span className={styles.checkmark} />
                            </label>
                            <div className={styles.label}> {st} </div>
                            <span className={styles.tooltip}> {sourceTypeDescription[st]} </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {!isLookHakathon() ? (
                      <>
                        <div className={styles.actions}>
                          <div className={styles.buttonWrapper}>
                            <PriceCard
                              mainText={`${(getPrice() / 10 ** 18).toFixed(2)} MONA ($${(
                                (getPrice() / 10 ** 18) *
                                parseFloat(monaPerEth) *
                                exchangeRate
                              ).toFixed(2)})`}
                              subText={parseInt(isAuction) === 1 ? 'highest bid' : 'sale price'}
                            />
                          </div>
                        </div>
                        <button type="button" className={styles.viewBidHistory} onClick={onHistory}>
                          view {parseInt(isAuction) === 1 ? 'bid' : 'purchase'} history
                        </button>
                        <button type="button" className={styles.bespokeBtn} onClick={onBespokeBtn}>
                          Want something more Bespoke?
                        </button>
                        <a href="https://staking.digitalax.xyz/" target="_blank">
                          <button type="button" className={styles.stakeBtn}>
                            STAKE YOUR FASHION FOR $MONA YIELD
                          </button>
                        </a>
                      </>
                    ) : null}
                    {isLookHakathon() && (
                      <div className={styles.lookInspo}>
                        <div className={styles.title}>LOOK NFT Inspo:</div>
                        {lookInspo.map((item, index) => (
                          <div className={styles.inspoItem} key={index}>
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {!isLookHakathon() && !!sourceType.length && (
                    <div className={styles.rightSection}>
                      {sourceType.map((st) => (
                        <div className={styles.item}>
                          <label className={styles.checkContainer}>
                            <input type="checkbox" className={styles.check} checked />
                            <span className={styles.checkmark} />
                          </label>
                          <div className={styles.label}> {st} </div>
                          <span className={styles.tooltip}> {sourceTypeDescription[st]} </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
        <BannerBar className={styles.homeHeroBar} type={2} />
        {product?.designer ? (
          <>
            <section className={styles.designerSection}>
              <video autoPlay loop muted className={styles.video}>
                <source src="./images/metaverse/designer-bg.mp4" type="video/mp4" />
              </video>
              <Container>
                <div className={styles.designerBody}>
                  <div className={styles.title}> designer </div>
                  <div className={styles.data}>
                    <a
                      href={`https://designers.digitalax.xyz/designers/${product?.designer?.name}`}
                      target="_blank"
                    >
                      <ImageCard showButton={false} imgUrl={product?.designer?.image} />
                    </a>
                    <div className={styles.infoWrapper}>
                      {owners.length ? (
                        <div className={styles.wearersLabel}>current wearer/S</div>
                      ) : (
                        <></>
                      )}
                      {owners.length ? (
                        <UserList
                          className={styles.userList}
                          userLimit={7}
                          users={owners}
                          onClickSeeAll={onClickSeeAllWearers}
                        />
                      ) : (
                        <></>
                      )}
                      <InfoCard libon="./images/metaverse/party_glasses.png">
                        <a
                          href={`https://designers.digitalax.xyz/designers/${product?.designer?.name}`}
                          target="_blank"
                        >
                          <div className={styles.name}> {product?.designer?.name} </div>
                        </a>
                        <div className={styles.description}>{product?.designer?.description}</div>
                        <a
                          href={`https://designers.digitalax.xyz/designers/${product?.designer?.name}`}
                          target="_blank"
                        >
                          <button type="button" className={styles.profileButton}>
                            View Full Profile
                          </button>
                        </a>
                      </InfoCard>
                      <a href="https://designers.digitalax.xyz/getdressed" target="_blank">
                        <button type="button" className={styles.getDressedButton}>
                          GET BESPOKE DRESSED BY THIS DESIGNER!
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

            {
            secondDesigners && secondDesigners.length > 0 && 
            secondDesigners.map(item => {
              return (
                <section className={[styles.designerSection, styles.margin50].join(' ')} key={item.name}>
                  <video autoPlay loop muted className={styles.video}>
                    <source src="./images/metaverse/designer-bg.mp4" type="video/mp4" />
                  </video>
                  <Container>
                    <div className={styles.designerBody}>
                      <div className={styles.title}> designer </div>
                      <div className={styles.data}>
                        <a
                          href={`https://designers.digitalax.xyz/designers/${item.name}`}
                          target="_blank"
                        >
                          <ImageCard showButton={false} imgUrl={item.image} />
                        </a>
                        <div className={styles.infoWrapper}>
                          {owners.length ? (
                            <div className={styles.wearersLabel}>current wearer/S</div>
                          ) : (
                            <></>
                          )}
                          {owners.length ? (
                            <UserList
                              className={styles.userList}
                              users={owners}
                              userLimit={7}
                              onClickSeeAll={onClickSeeAllWearers}
                            />
                          ) : (
                            <></>
                          )}
                          <InfoCard libon="./images/metaverse/party_glasses.png">
                            <a
                              href={`https://designers.digitalax.xyz/designers/${item.name}`}
                              target="_blank"
                            >
                              <div className={styles.name}> {item.name} </div>
                            </a>
                            <div className={styles.description}>{item.description}</div>
                            <a
                              href={`https://designers.digitalax.xyz/designers/${item.name}`}
                              target="_blank"
                            >
                              <button type="button" className={styles.profileButton}>
                                View Full Profile
                              </button>
                            </a>
                          </InfoCard>
                          <a href="https://designers.digitalax.xyz/getdressed" target="_blank">
                            <button type="button" className={styles.getDressedButton}>
                              GET BESPOKE DRESSED BY THIS DESIGNER!
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Container>
                </section>
              )
            })
            }
          </>
        ) : null}

        <section id="fashion_list">
          {!id.includes('v1') &&
          ((parseInt(id) >= 11 && parseInt(id) < 100294) || parseInt(id) > 130000) ? (
            <FashionList fashionData={fashionData} collections={product} />
          ) : null}
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      pageTitle: 'Hello',
    }, // will be passed to the page component as props
  };
}

export default Product;
