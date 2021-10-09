import CollectionCard from '@components/collection-card';
import Container from '@components/container';
import React from 'react';
import styles from './styles.module.scss';

const CollectionList = ({ items }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {items.map((item, index) => {
          if (index % 2 === 1) return <></>;
          return (
            <section className={styles.collectionRowSection} key={item.id}>
              {/* <video autoPlay muted loop className={styles.backVideo}>
                <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
              </video> */}
              <Container>
                <div className={styles.body}>
                  <CollectionCard collection={items[index]} />
                  {index + 1 < items.length ? (
                    <CollectionCard collection={items[index + 1]} />
                  ) : null}
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default CollectionList;
