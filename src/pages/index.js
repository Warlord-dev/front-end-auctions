import React, { useEffect, useState } from 'react';
import { Router } from 'next/router';
import Head from 'next/head';
import {
  getCollectionGroups,
  getDigitalaxGarmentCollections,
  getDigitalaxMarketplaceOffers,
  getDigitalaxMarketplaceV2Offers,
} from '@services/api/apiService';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import Container from '@components/container';
import Link from 'next/link';
import ProductInfoCard from '@components/product-info-card';
import Filters from '@components/filters';
import { filterProducts } from '@utils/helpers';
import digitalaxApi from '@services/api/espa/api.service';

const LandingPage = () => {
  const chainId = useSelector(getChainId);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [lookIds, setLookIds] = useState([]);

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('485692459240447');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  // const getGarmentsWithOwnerInfo = (garments, users) => {
  //   if (!garments) return []
  //   return garments.map(garment => {
  //     const user = users.find(item => item.wallet && item.wallet.toLowerCase() == garment.owner.toLowerCase())
  //     return {
  //       ...garment,
  //       ...user
  //     }
  //   })
  // }

  const getOwners = (garments, itemSold, users) => {
    if (!garments) return [];
    const owners = garments.slice(0, itemSold).map((garment) => garment.owner.toLowerCase());
    const arranged = [...new Set(owners)];
    return arranged.map((garment) => {
      const user = users.find((item) => item.wallet && item.wallet.toLowerCase() == garment) || {};
      return {
        ...garment,
        ...user,
      };
    });
  };

  useEffect(() => {
    const fetchCollectionGroups = async () => {
      const { digitalaxCollectionGroups } = await getCollectionGroups(chainId);
      const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offers(chainId);
      const users = await digitalaxApi.getAllUsersName();

      const prods = [];

      shuffle(digitalaxCollectionGroups).forEach((collectionGroup) => {
        if (collectionGroup.id === '15') {
          const ids = [];
          collectionGroup.auctions.forEach((auction) => ids.push(auction.id));
          collectionGroup.collections.forEach((collection) => ids.push(collection.id));
          setLookIds(ids);
        }
        if (
          collectionGroup.auctions.length > 1 ||
          (collectionGroup.auctions.length === 1 && collectionGroup.auctions[0].id !== '0')
        ) {
          collectionGroup.auctions.forEach((auction) => {
            prods.push({
              id: auction.id,
              designer: auction.designer,
              topBid: auction.topBid,
              startTime: auction.startTime,
              endTime: auction.endTime,
              garment: auction.garment,
              sold: Date.now() > auction.endTime * 1000,
              rarity: 'Exclusive',
              auction: true,
              version: 2,
            });
          });
        }

        if (
          collectionGroup.collections.length > 1 ||
          (collectionGroup.collections.length === 1 && collectionGroup.collections[0].id !== '0')
        ) {
          collectionGroup.collections.forEach((collection) => {
            const offer = digitalaxMarketplaceV2Offers.find((offer) => offer.id === collection.id);
            // console.log('offer: ', offer.garmentCollection)
            console.log(collection.garments.length);
            prods.push({
              id: collection.id,
              designer: collection.designer,
              rarity: collection.rarity,
              startTime: offer?.startTime,
              garment: collection.garments[0],
              // garments: getGarmentsWithOwnerInfo(offer.garmentCollection.garments, users),
              owners: getOwners(offer?.garmentCollection.garments, offer?.amountSold, users),
              primarySalePrice: offer ? offer.primarySalePrice : 0,
              sold: collection.garments.length === parseInt(offer?.amountSold),
              auction: false,
              version: 2,
            });
          });
        }
        if (
          collectionGroup.digiBundle.length > 1 ||
          (collectionGroup.digiBundle.length === 1 && collectionGroup.digiBundle[0].id !== '0')
        ) {
          collectionGroup.digiBundle.forEach((collection) => {
            const offer = digitalaxMarketplaceV2Offers.find((offer) => offer.id === collection.id);
            prods.push({
              id: collection.id,
              designer: collection.designer,
              startTime: offer?.startTime,
              primarySalePrice: offer ? offer.primarySalePrice : 0,
              sold: collection.garments.length === parseInt(offer.amountSold),
              rarity: collection.rarity,
              garment: collection.garments[0],
              // garments: getGarmentsWithOwnerInfo(offer.garmentCollection.garments, users),
              owners: getOwners(offer?.garmentCollection.garments, offer?.amountSold, users),
              auction: false,
              version: 2,
            });
          });
        }
      });

      setProducts(prods);
    };
    fetchCollectionGroups();
  }, []);

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Skins Landing page',
    title: 'Digitalax - Web3 Fashion Economy',
    description:
      'Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. ',
  };

  // console.log('products: ', products)

  return (
    <div className={styles.wrapper}>
      <Head>
        <meta
          name="description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <meta property="og:title" content="Digitalax - Web3 Fashion Economy" />
        <meta
          property="og:description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <meta property="og:url" content="https://marketplace.digitalax.xyz" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ESPA4play" />
        <meta name="twitter:title" content="Skins Landing page" />
        <meta
          name="twitter:description"
          content="Take your digital fashion skins to the next level: directly into indie games & mods, where players from amateur to pro can start to earn a livelihood through play, without sacrificing our love of the game. ESPA is the first casual esports platform, with direct integration with DIGITALAX NFT skins on Matic Network. "
        />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <section className={styles.homeHeroSection}>
        <div className={styles.leftWrapper}>
          <img src="/images/metaverse/web3fashion.png" className={styles.heroLogo} />
          <p>
            Indie Web3 Fashion Marketplace on Polygon Network. Powered by the{' '}
            <a href="https://designers.digitalax.xyz/" target="_blank">
              Global Designer Network
            </a>
            .
          </p>
        </div>

        <div className={styles.actionsWrapper}>
          <Link href="/collections">
            <a className={styles.heroSectionLink}>{`View All Collections >`}</a>
          </Link>

          <div className={styles.filtersWrapper}>
            <Filters filter={filter} filterChange={setFilter} sortByChange={setSortBy} />
          </div>
        </div>
      </section>

      <Container>
        <section className={styles.collectionsWrapper}>
          {filterProducts(products, filter, sortBy)
            .sort((a, b) => {
              if (a.sold && !b.sold) return 1;
              if (!a.sold && b.sold) return -1;
              return 0;
            })
            .map((prod) => {
              return (
                <>
                  <ProductInfoCard
                    product={prod}
                    price={prod.auction ? prod.topBid : prod.primarySalePrice}
                    sold={prod.sold}
                    showRarity
                    showCollectionName
                    isAuction={prod.auction}
                    isLook={lookIds.includes(prod.id)}
                  />
                </>
              );
            })}
        </section>
      </Container>
    </div>
  );
};

export default LandingPage;
