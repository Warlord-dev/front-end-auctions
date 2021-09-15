import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Container from '@components/container';
import { getCollectionGroupById, getDigitalaxGarmentCollections, getDigitalaxMarketplaceOffers, getDigitalaxMarketplaceV2Offers } from '@services/api/apiService';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';
import { filterProducts } from '@utils/helpers';

const Auctions = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [auctions, setAuctions] = useState([]);
  const [collections, setCollections] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);
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
            auction: true,
            rarity: 'Exclusive',
          });
        });
  
        const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offers(chainId);
  
        digitalaxCollectionGroup.collections.forEach((collection) => {
          const foundOfferItem = digitalaxMarketplaceV2Offers.find((offer) => offer.id === collection.id)
          colls.push({
            designer: collection.designer,
            developer: collection.developer,
            auction: false,
            startTime: foundOfferItem.startTime,
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
            designer: {
              name: 'Mirth',
              image: '/images/metaverse/mirth.png'
            },
            garment: collection.garments[0],
            startTime: offer.startTime,
            primarySalePrice: offer ? offer.primarySalePrice : 0,
            rarity: collection.rarity,
            auction: false,
            version: 1,
          });
        });
      }

      setAuctions(aucs);
      setCollections(colls);
    };

    fetchCollectionGroup();
  }, []);

  const filteredProducts = filterProducts([...auctions, ...collections], filter, sortBy) || [];

  return (
    <div className={styles.wrapper}>
       <HeroSection 
          width={id ==='0' ? '60%' : '80%'}
          logo={id === '0' ? '/images/metaverse/amongus-logo1.png' : '/images/metaverse/minecraft-logo.png'} 
          filter={filter}
          setFilter={(v) => setFilter(v)}
          setSortBy={(v) => setSortBy(v)}
        />

      {filteredProducts.map((prod, index) => {
        if (index % 2 === 1) return <> </>;
        return (
          <section className={styles.productsSection} key={prod.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={filteredProducts[index]}
                  v1={filteredProducts[index].version === 1}
                  price={filteredProducts[index].topBid || filteredProducts[index].primarySalePrice}
                  showRarity
                  showCollectionName
                  isAuction={filteredProducts[index].auction}
                />
                {index + 1 < filteredProducts.length ? (
                  <ProductInfoCard
                    product={filteredProducts[index + 1]}
                    v1={filteredProducts[index].version === 1}
                    price={filteredProducts[index].topBid || filteredProducts[index].primarySalePrice}
                    showRarity
                    showCollectionName
                    isAuction={filteredProducts[index].auction}
                  />
                ) : null}
              </div>
            </Container>
          </section>
        );
      })}
      {/* {collections.map((collection, index) => {
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
      })} */}
    </div>
  );
};

export default Auctions;
