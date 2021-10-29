import React from 'react';
import { DIGITALAX_FASHION_WEBSITE } from '@constants/urls';
import styles from './page103104.module.scss';

const Page103104 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/99100_image1.gif" className={styles.image1} />

      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/6/videos/101102_video1.mp4" type="video/mp4" />
      </video>

      <img src="/magazine/6/images/101102_image1.png" className={styles.image2} />

      <div className={styles.rect1}></div>

      <div className={styles.text1}>GDN PURVEYORS</div>
      <div className={styles.text2}>GDN PURVEYORS</div>
      <div className={styles.text3}>GDN PURVEYORS</div>
      <div className={styles.text4}>GDN PURVEYORS</div>

      <div className={styles.circle1}></div>
      <div className={styles.circleText1}>Collect POAP!</div>
      <div className={styles.circleText2}>yay</div>
      <a href="https://poap.website/gdnpurveyors6" target="_blank">
        <img src="/images/poap-logo.png" className={styles.poapImage} />
      </a>

      <a href="https://twitter.com/JordanLzG" target="_blank">
        <img src="/magazine/6/images/101102_image2.png" className={styles.image3} />
      </a>
      <a href="https://twitter.com/evabeylin" target="_blank">
        <img src="/magazine/6/images/101102_image3.png" className={styles.image4} />
      </a>
      <a href="https://twitter.com/robnessofficial" target="_blank">
        <img src="/magazine/6/images/101102_image4.png" className={styles.image5} />
      </a>
      <a href="https://twitter.com/coin_artist" target="_blank">
        <img src="/magazine/6/images/101102_image5.png" className={styles.image6} />
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage1} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/565/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item1}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmPF67d58n1oAWG7x7foC9nGs33zDXB952V74bknTn5XXe"
            type="video/mp4"
          />
        </video>
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage2} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/566/1/0/`} target="_blank">
        <img
          className={styles.item2}
          src="https://digitalax.mypinata.cloud/ipfs/QmWVFr5A1fQ2c9oAsoeb9nkMRheWNPpKpuUae7JTXogrDv"
        />
        {/* <video autoPlay muted loop className={styles.item2}>
          <source src='https://digitalax.mypinata.cloud/ipfs/QmWVFr5A1fQ2c9oAsoeb9nkMRheWNPpKpuUae7JTXogrDv' type="video/mpeg" />
        </video> */}
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage3} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/567/1/0/`} target="_blank">
        <img
          className={styles.item3}
          src="https://digitalax.mypinata.cloud/ipfs/QmbjkrN8vXFY43jaWjwgT36fw3iktwWgXTGZGHKvNCWeYi"
        />
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage4} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/568/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item4}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmTpBqm297SmZ1kJCxisSQjCRXNC5V1yaF953PSsSgNXND"
            type="video/mp4"
          />
        </video>
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage5} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/569/1/0/`} target="_blank">
        <img
          className={styles.item5}
          src="https://digitalax.mypinata.cloud/ipfs/QmW21TSpG7UTHszokYf7LC4CE3fd27qcvN6rqWDNXsBsBe"
        />
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage6} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/570/1/0/`} target="_blank">
        <img
          className={styles.item6}
          src="https://digitalax.mypinata.cloud/ipfs/QmRYQkGHjbyzDRFycFCYUw4YnKo7rUyNFXTyEgNA7gMALv"
        />
      </a>

      <img src="/magazine/6/images/99100_image4.png" className={styles.itemImage7} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/571/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item7}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmS8PWRY4YrCQMyNBRsDfvJSSPk4hY45rwNePdNgyRGskP"
            type="video/mp4"
          />
        </video>
      </a>
    </div>
  );
};

export default Page103104;
