import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Container from '@components/container';
import { getCollectionGroupById, getDigitalaxMarketplaceV2Offers } from '@services/api/apiService';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import HeroSection from '@components/hero-section';
import ProductInfoCard from '@components/product-info-card';
import { filterProducts } from '@utils/helpers';

const Auctions = () => {
  const route = useRouter();
  const chainId = useSelector(getChainId);
  const [auctions, setAuctions] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const { id } = route.query;

  useEffect(() => {
    const fetchCollectionGroup = async () => {
      const { digitalaxCollectionGroup } = await getCollectionGroupById(chainId, id);
      let aucs = [];
      digitalaxCollectionGroup.auctions.forEach((auction) => {
        aucs.push({
          ...auction,
          auction: true,
          rarity: 'Exclusive',
        });
      });

      setAuctions(aucs);
    };

    fetchCollectionGroup();
  }, []);

  const filteredProducts = filterProducts(auctions, filter, sortBy) || [];

  return (
    <div className={styles.wrapper}>
      <HeroSection
        logo={
          id === '3'
            ? '/images/metaverse/auctionsLogo.png'
            : '/images/metaverse/marketplaceLogo.png'
        }
        filter={filter}
        setFilter={(v) => setFilter(v)}
        setSortBy={(v) => setSortBy(v)}
      />

      {filteredProducts.map((auction, index) => {
        if (index % 2 === 1) return <> </>;
        return (
          <section className={styles.productsSection} key={auction.id}>
            <video autoPlay muted loop className={styles.backVideo}>
              <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
            </video>
            <Container>
              <div className={styles.body}>
                <ProductInfoCard
                  product={filteredProducts[index]}
                  price={filteredProducts[index].topBid}
                  showRarity
                  showCollectionName
                  isAuction
                />
                {index + 1 < filteredProducts.length ? (
                  <ProductInfoCard
                    product={filteredProducts[index + 1]}
                    price={filteredProducts[index + 1].topBid}
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
    </div>
  );
};

export default Auctions;
