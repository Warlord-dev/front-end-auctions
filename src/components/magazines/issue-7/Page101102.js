import React from 'react';
import { DIGITALAX_FASHION_WEBSITE } from '@constants/urls';
import styles from './page101102.module.scss';

const Page101102 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/99100_image2.png" className={styles.image1} />
      <div className={styles.text1}>WHAT ARE YOU WEARING?</div>
      <div className={styles.text2}>WHAT ARE YOU WEARING?</div>
      <div className={styles.text3}>WHAT ARE YOU WEARING?</div>
      <div className={styles.text4}>WHAT ARE YOU WEARING?</div>
      <div className={styles.text5}>WHAT ARE YOU WEARING?</div>
      <div className={styles.text6}>FASHION FOR THE METAVERSE</div>
      <img src="/magazine/6/images/99100_image1.gif" className={styles.image2} />
      <img src="/magazine/6/images/99100_image3.png" className={styles.image3} />
      <div className={styles.rect1}></div>
      <div className={styles.text7}>Fashion Hackathon</div>
      <div className={styles.text8}>Programming Wearable Source Code</div>

      <img src="/magazine/6/images/99100_image4.png" className={styles.image4} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/574/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item1}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmRmpV29fTfFN4t2ACHiN9bzKkVryT6h48DecKtZgr6hCE"
            type="video/mp4"
          />
        </video>
      </a>
      <img src="/magazine/6/images/99100_image4.png" className={styles.image5} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/575/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item2}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmXj5pH2HoKLhKG9iTuwtYDJshCmB6PYLaxy1jp9eSRTJG"
            type="video/mp4"
          />
        </video>
      </a>
      <img src="/magazine/6/images/99100_image4.png" className={styles.image6} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/576/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item3}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmRfQhWSuzv8RKjDK96QnkAGDCCEcYXorcF8zw6WeCab7H"
            type="video/mp4"
          />
        </video>
      </a>
      <img src="/magazine/6/images/99100_image4.png" className={styles.image7} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/577/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item4}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmUxUzffeh8UsHK4E6SBjUKnBcyukBXXcp39gJwVtQkAHf"
            type="video/mp4"
          />
        </video>
      </a>
      <img src="/magazine/6/images/99100_image4.png" className={styles.image8} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/561/2/0/`} target="_blank">
        <img
          className={styles.item5}
          src="https://digitalax.mypinata.cloud/ipfs/QmbGe4mMPsSuhDUSGgtX3EErNEfuU8dxxM8KaikRfixqoq"
        />
      </a>
      <img src="/magazine/6/images/99100_image4.png" className={styles.image9} />
      <a href={`${DIGITALAX_FASHION_WEBSITE}/product/564/1/0/`} target="_blank">
        <video autoPlay muted loop className={styles.item6}>
          <source
            src="https://digitalax.mypinata.cloud/ipfs/QmWqBHdfAGcLh6so3RkFqfwpoJYW2GepX5oAxM4kfcWCnJ"
            type="video/mp4"
          />
        </video>
      </a>
    </div>
  );
};

export default Page101102;
