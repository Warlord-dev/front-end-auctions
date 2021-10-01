import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

import Container from '@components/container';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';
import { getCollectionGroupById, getDigitalaxMarketplaceV2Offers } from '@services/api/apiService';
import digitalaxApi from '@services/api/espa/api.service'
import { getChainId } from '@selectors/global.selectors';
import { filterProducts } from '@utils/helpers';

const Collections = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [collections, setCollections] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const { id } = route.query;

  const getGarmentsWithOwnerInfo = (garments, users) => {
    if (!garments) return []
    return garments.map(garment => {
      const user = users.find(item => item.wallet && item.wallet.toLowerCase() == garment.owner.toLowerCase())
      return {
        ...garment,
        ...user
      }
    })
  }

  const getOwners = (garments, itemSold, users) => {
    if (!garments) return []
    const owners = garments.slice(0, itemSold).map(garment => garment.owner.toLowerCase())
    const arranged = [...new Set(owners)]
    return arranged.map(garment => {
      const user = users.find(item => item.wallet && item.wallet.toLowerCase() == garment)
      return {
        ...garment,
        ...user
      }
    })
  }

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
      const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offers(chainId);

      const users = await digitalaxApi.getAllUsersName()

      let colls = [];

      digitalaxCollectionGroup.collections.forEach((collection) => {
        const foundOfferItem = digitalaxMarketplaceV2Offers.find(
          (offer) => offer.id === collection.id,
        );
        colls.push({
          designer: collection.designer,
          developer: collection.developer,
          garment: collection.garments[0],
          garments: getGarmentsWithOwnerInfo(foundOfferItem.garmentCollection.garments, users),
          owners: getOwners(foundOfferItem.garmentCollection.garments, foundOfferItem.amountSold, users),
          primarySalePrice: foundOfferItem ? foundOfferItem.primarySalePrice : 0,
          auction: false,
          id: collection.id,
          rarity: collection.rarity,
        });
      });

      setCollections(colls);
    };

    fetchCollectionGroup();
  }, []);

  const filteredProducts = filterProducts(collections, filter, sortBy) || [];

  return (
    <div className={styles.wrapper}>
      <HeroSection
        logo="/images/metaverse/marketplaceLogo.png"
        filter={filter}
        setFilter={(v) => setFilter(v)}
        setSortBy={(v) => setSortBy(v)}
      />

      {filteredProducts.map((collection, index) => {
        if (index % 2 === 1) return <></>;
        return (
          <section className={styles.productsSection} key={collection.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={filteredProducts[index]}
                  price={filteredProducts[index].primarySalePrice}
                  showCollectionName
                  showRarity
                />
                {index + 1 < filteredProducts.length ? (
                  <ProductInfoCard
                    product={filteredProducts[index + 1]}
                    price={filteredProducts[index + 1].primarySalePrice}
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

export default Collections;
