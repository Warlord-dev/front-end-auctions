import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import HeroBar from '@components/hero-bar';
import ImageCard from '@components/image-card';
import styles from './styles.module.scss';
import InfoCard from '@components/info-card';
import NewButton from '@components/buttons/newbutton';
import Container from '@components/container';
import {
  getDigitalaxMarketplaceV2Offer,
  getGarmentByAuctionId,
  getGarmentV2ByAuctionId,
  getGarmentV2ByCollectionId,
} from '@services/api/apiService';
import { getChainId } from '@selectors/global.selectors';
import PriceCard from '@components/price-card';
import { getRarity } from '@utils/helpers';
import { openBidHistoryModal, openPurchaseHistoryModal } from '@actions/modals.actions';
import ProductDetails from '@components/product-details';

const Product = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id, rarity } = router.query;
  const chainId = useSelector(getChainId);
  const [product, setProduct] = useState({});
  const [offer, setOffer] = useState({});
  const [tokenIds, setTokenIds] = useState([]);
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

  useEffect(() => {
    if (id) {
      const fetchGarmentV2ByID = async () => {
        if (rarity !== '1') {
          const { digitalaxGarmentV2Collection } = await getGarmentV2ByCollectionId(chainId, id);
          if (digitalaxGarmentV2Collection.id) {
            const { digitalaxMarketplaceV2Offers } = await getDigitalaxMarketplaceV2Offer(
              chainId,
              digitalaxGarmentV2Collection.id,
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
              designer: digitalaxGarmentV2Collection.designer,
              developer: digitalaxGarmentV2Collection.developer,
            });
          }
        } else {
          if (parseInt(id) > 4) {
            const { digitalaxGarmentV2Auction } = await getGarmentV2ByAuctionId(chainId, id);
            setTokenIds([digitalaxGarmentV2Auction.garment.id]);
            setProduct(digitalaxGarmentV2Auction);
          } else {
            const { digitalaxGarmentAuction } = await getGarmentByAuctionId(chainId, id);
            setTokenIds([digitalaxGarmentAuction.garment.id]);
            setProduct(digitalaxGarmentAuction);
          }
        }
      };

      fetchGarmentV2ByID();
    }
  }, []);

  useEffect(() => {
    if (product?.endTime) {
      setInterval(() => {
        getTimeFormat();
      }, 60000);
    }
  }, [product]);

  const getPrice = () => {
    if (parseInt(rarity) !== 1) return offer?.primarySalePrice;
    else return product.topBid;
  };

  const onHistory = () => {
    if (parseInt(rarity) === 1) {
      dispatch(
        openBidHistoryModal({
          tokenIds,
        }),
      );
    } else {
      dispatch(
        openPurchaseHistoryModal({
          tokenIds,
        }),
      );
    }
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

  return (
    <div className={styles.wrapper}>
      <section className={styles.mainSection}>
        <video autoPlay loop muted className={styles.video}>
          <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
        </video>
        <Container>
          <div className={styles.body}>
            <div className={styles.mainBody}>
              <div className={styles.imageCardWrapper}>
                <div className={styles.rarity}> {getRarity(parseInt(rarity))} </div>
                <ImageCard
                  data={product}
                  price={getPrice() / 10 ** 18}
                  libon={parseInt(rarity)}
                  disable={
                    (parseInt(rarity) === 1 && Date.now() > product.endTime * 1000) ||
                    offer?.amountSold >= offer?.totalAmount
                  }
                />
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.amount}>
                  {parseInt(rarity) !== 1 ? (
                    <>
                      {offer?.amountSold} of {offer?.totalAmount}
                    </>
                  ) : (
                    <>{`${days}:${hours}:${minutes}`}</>
                  )}
                </div>
                <InfoCard libon="./images/metaverse/Gamepad 1.png">
                  <div className={styles.infoCard}>
                    <div className={styles.skinName}>
                      <div className={styles.text}> {product?.garment?.name} </div>
                    </div>
                    <div className={styles.description}>{product?.garment?.description}</div>
                  </div>
                </InfoCard>
                <div className={styles.actions}>
                  <div className={styles.buttonWrapper}>
                    <a href="https://espa.digitalax.xyz/" target="_blank">
                      <NewButton text="wear in game" />
                    </a>
                    <span className={styles.buttonLabel}> play in espa esports </span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <PriceCard
                      mainText={`${getPrice() / 10 ** 18} MONA`}
                      subText={parseInt(rarity) === 1 ? 'highest bid' : 'sale price'}
                    />
                  </div>
                </div>
                <button type="button" className={styles.viewBidHistory} onClick={onHistory}>
                  view {parseInt(rarity) === 1 ? 'bid' : 'purchase'} history
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <HeroBar />
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
                  <ImageCard showButton={false} imgUrl={product?.designer?.image} />
                  <div className={styles.infoWrapper}>
                    <InfoCard libon="./images/metaverse/party_glasses.png">
                      <div className={styles.name}> {product?.designer?.name} </div>
                      <div className={styles.description}>{product?.designer?.description}</div>
                    </InfoCard>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          <HeroBar />
        </>
      ) : null}

      <section className={styles.globalDesignerNetwork}>
        <img src="/images/metaverse/global_designer_network.png" className={styles.title} />
        <div className={styles.text}>
          The Global Designer Network is initiating as an on-chain DAO. The Global Designer Network
          is initiating as an on-chain DAO. The Global Designer Network is initiating as an on-chain
          DAO. The Global Designer Network is initiating as an on-chain DAO. The Global Designer
          Network is initiating as an on-chain DAO. The Global Designer Network is initiating as an
          on-chain DAO. The Global Designer Network is initiating as an on-chain DAO. The Global
          Designer Network is initiating as an on-chain DAO. The Global Designer Network is
          initiating as an on-chain DAO. The Global Designer Network is initiating as an on-chain
          DAO. The Global Designer Network is initiating as an on-chain DAO. The Global Designer
          Network is initiating as an on-chain DAO.
        </div>
        <a href="/" target="_blank" className={styles.link}>
          <div className={styles.linkWrapper}>
            <div className={styles.body}>read more about the gdn dao</div>
          </div>
        </a>
      </section>

      <ProductDetails />
    </div>
  );
};

export default Product;
