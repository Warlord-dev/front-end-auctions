import React from 'react';
import styles from './page3132.module.scss';

const Page3132 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.backVideo}>
        <source src="./magazine/2/images/31_32.mp4" />
      </video>
      <div className={styles.text1}>Is Bitcoin greener than what we think?</div>
      <div className={styles.text2}>
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
        <br />
      </div>
      <div className={styles.text3}>
        So let’s break down this narrative further, because, after all, the devil is in the details.
        <br />
        <br />
        First off, to set some of the ground context, everything that we do has an impact; the very
        internet that all of us
      </div>
      <div className={styles.text4}>
        have efficiently integrated within every aspect of what we do is powered by servers needing
        cooling mechanisms to function properly. And these companies employ thousands of employees
        travelling to and from work each day to AC equipped office to maintain our precious
        connectivity. And it’s not just that, every single picture that we save to the cloud or send
        to our friends, families has a cost associated with it. Every tweet, tiktok, discord server
        increases each of our carbon footprints. And that’s just
      </div>
      <div className={styles.text5}>
        the beginning; how about travel? Not just our own personal location hopping but that of all
        of the resoruces that each of us consume; food, apparel, electronics etc. etc. All of it is
        not local, it usually travels thousands of miles across the continents to get to us.
        <br />
        <br />
        Thus, with this said, it’s not to say that the concerns around cryptocurrency mining
        consumption are not valid in some respects— in fact, for the better half of the entire
        industry’s existence it has been a forefront topic that some of the brightest minds have
        actively spoken up about and starting hashing out varying solutions. No one in the crypto
        community is trying to hide any of
      </div>
      <div className={styles.text6}>
        the concerns or costs, and in fact, if you speak with an authentic community member they
        will be more than open to discussing the topic in all of its glory. There are 4-5 years of
        documented discussions, conferences, deep academic research, and github repositories all on
        this topic. Ethereum is currently in the live process of migrating to Ethereum 2.0 and Proof
        of Stake as a huge step environmentally conscious step as the mechanism for securing the
        network becomes far more energy efficient.
        <br />
        <br />
        Bitcoin, unlike Ethereum, for now, and most probably as long as it continues to operate, is
        sticking with Proof of Work. However, not all of Bitcoin’s energy consumption translates
        into the high
      </div>
      <div className={styles.text7}>
        carbon emissions that is so often misrepresented. Much of Bitcoin’s mining uses renewable
        energy, and, although the exact % of mining leveraging this is not precisely accounted for,
        it sits somewhere between 39%-70%— which, case in point, is in itself higher than the
        renewable energy in the US power grid. Miners in China also have taken the same initiative,
        where a considerable amount use excess energy that would otherwise be wasted in those areas
        where it can not be exported to city infrastructure.
      </div>
      <div className={styles.text8}>
        Thus, with this said, and taking a step back to look at the bigger picture, perhaps there is
        a way after all that Bitcoin can continue to operate and actually help take advantage of
        much more wasted energy than previously thought. Even El Salvador and the presidents recent
        announcement to enact Bitcoin as legal tender has been announced alongside the country’s
        intention to put up a plan to offer facilities for Bitcoin mining with considerably cheap
        and 100% renewable 0 emissions energy from their volcanos.
      </div>
      <div className={styles.text9}>
        It’s consumption shouldn’t be ignored and more active and collective steps must be taken,
        however, perhaps after all, all of the contraversy isn’t so much just solely about the
        environment. It’s moreso about people being scared of a new revolutionary technology and not
        taking the proper time, that is required, to fully understand it in all of its complicity.
        <br />
        <br />
        It’s important that we do not mistake the forest for the trees— the situation is not black
        and white. Bitcoin is so much more than just an energy expenditure. It is the first globally
        recognised censorship-resistant decentralised digital asset that has ultimately initiated
        the entirity of the web3 ecosystem as we know of it today— an ecosystem that provides
        tangible evidence that the broken centralised web2 exploitation is not a framework that any
        of us have to accept or be forced to live by.
      </div>
      <div className={styles.text10}>SUSTAINABILITY PIONEERS</div>
      <img src="./magazine/2/images/31_32_image.png" className={styles.image1} />
      <img src="./magazine/2/images/31_32_bitcoin.png" className={styles.image2} />
    </div>
  );
};

export default Page3132;
