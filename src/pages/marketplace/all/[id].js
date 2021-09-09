import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Container from '@components/container';
import { getCollectionGroupById, getDigitalaxGarmentCollections, getDigitalaxMarketplaceOffers, getDigitalaxMarketplaceV2Offers } from '@services/api/apiService';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';

const Auctions = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [auctions, setAuctions] = useState([]);
  const [collections, setCollections] = useState([]);
  const { id } = route.query;

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      let aucs = [];
      let colls = [];
      if (id === '1') {
        const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
        digitalaxCollectionGroup.auctions.forEach((auction) => {
          aucs.push({
            ...auction,
            rarity: 'Exclusive',
          });
        });
  
        const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offers(chainId);
  
        digitalaxCollectionGroup.collections.forEach((collection) => {
          const foundOfferItem = digitalaxMarketplaceV2Offers.find((offer) => offer.id === collection.id)
          colls.push({
            designer: collection.designer,
            developer: collection.developer,
            garment: {
              ...collection.garments[0],
            },
            primarySalePrice: foundOfferItem ? foundOfferItem.primarySalePrice : 0,
            id: collection.id,
            rarity: collection.rarity,
          });
        });
      } else {
        const { digitalaxGarmentCollections } = await getDigitalaxGarmentCollections(chainId);
        const { digitalaxMarketplaceOffers } = await getDigitalaxMarketplaceOffers(chainId);
        digitalaxGarmentCollections.forEach((collection) => {
          const offer = digitalaxMarketplaceOffers.find((offer) => offer.id === collection.id);
          colls.push({
            id: collection.id,
            garment: collection.garments[0],
            primarySalePrice: offer ? offer.primarySalePrice : 0,
            rarity: collection.rarity,
            version: 1,
          });
        });
      }

      setAuctions(aucs);
      setCollections(colls);
    };

    fetchCollectionGroup();
  }, []);

  return (
    <div className={styles.wrapper}>
       <HeroSection width={id ==='0' ? '60%' : '80%'} logo={id === '0' ? '/images/metaverse/amongus-logo1.png' : '/images/metaverse/minecraft-logo.png'} />

      {auctions.map((auction, index) => {
        if (index % 2 === 1) return <> </>;
        return (
          <section className={styles.productsSection} key={auction.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={auctions[index]}
                  v1={auctions[index].version === 1}
                  price={auctions[index].topBid}
                  showRarity
                  showCollectionName
                  isAuction
                />
                {index + 1 < auctions.length ? (
                  <ProductInfoCard
                    product={auctions[index + 1]}
                    v1={auctions[index].version === 1}
                    price={auctions[index + 1].topBid}
                    showRarity
                    showCollectionName
                    isAuction
                  />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
      {collections.map((collection, index) => {
        if (index % 2 === 1) return <></>;
        return (
          <section className={styles.productsSection} key={collection.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={collections[index]}
                  v1={collections[index].version === 1}
                  price={collections[index].primarySalePrice}
                  showCollectionName
                  showRarity
                />
                {index + 1 < collections.length ? (
                  <ProductInfoCard
                    product={collections[index + 1]}
                    v1={collections[index].version === 1}
                    price={collections[index + 1].primarySalePrice}
                    showCollectionName
                    showRarity
                  />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
};

export default Auctions;
