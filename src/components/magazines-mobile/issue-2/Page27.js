import React from 'react';
import styles from './page27.module.scss';

const Page27 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/31_32_mobile1.jpg" className={styles.back} />
      <div className={styles.text1}>SUSTAINABILITY PIONEERS</div>
      <div className={styles.text2}>Is Bitcoin greener than what we think?</div>
      <div className={styles.text3}>
        When it comes to digital curriencies, especially the two most prominent out there, Bitcoin
        and Ethereum, we are all far too aware of the critical headlines and contraversies around
        both of the crypto’s carbon footprint, sustainability and the large energy consumption
        required in order to keep them operational, where both employ the Proof of Work (PoW)
        consensus mechanism for securing transcations on the network. PoW relies on computers
        solving puzzles, which uses electricity, and these puzzles get harder and harder overtime,
        where as the network grows, the relative rate of new coins mined stays stable. Miners solve
        these puzzles and are rewarded with new coins. And thus, they get better GPU’s, more
        powerful setups to remain competitive as the mining pool grows. The cost of attacking
        Bitcoin rises along with the increase in the computational power and the energy consumed by
        those mining or securing the network.
        <br />
        <br />
        However, there is more to the story than just flashy headlines and 5,000 word Medium
        articles deeming the entire crypto ecosystem and everything built around it as an absolute
        disaster where ecological devastation remains out of control.
      </div>
      <div className={styles.text4}>
        So let’s break down this narrative further, because, after all, the devil is in the details.
        <br />
        <br />
        First off, to set some of the ground context, everything that we do has an impact; the very
        internet that all of us have efficiently integrated within every aspect of what we do is
        powered by servers needing cooling mechanisms to function properly. And these companies
        employ thousands of employees travelling to and from work each day to AC equipped office to
        maintain our precious connectivity. And it’s not just that, every single picture that we
        save to the cloud or send to our friends, families has a cost associated with it. Every
        tweet, tiktok, discord server increases each of our carbon footprints. And that’s just the
        beginning; how about travel? Not just our own personal location hopping but that of all of
        the resoruces that each of us consume; food, apparel, electronics etc. etc. All of it is not
        local, it usually travels thousands of miles across the continents to get to us.
        <br />
        <br />
        Thus, with this said, it’s not to say that the concerns around cryptocurrency mining
        consumption are not valid in some respects— in fact, for the better half of the entire
        industry’s existence it has been a forefront topic that some of the brightest minds have
        actively spoken up about and starting hashing out varying solutions. No one in the crypto
        community is trying to hide any of
      </div>
    </div>
  );
};

export default Page27;
