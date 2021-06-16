import React from 'react';
import { useSelector } from 'react-redux';
import UnlockPage from '../common/UnlockPage';
import styles from './page8788.module.scss';
import Router, { useRouter } from 'next/router'

const Page8788 = () => {
  const { contentUnlocked } = useSelector((state) => state.global.toJS());
  const router = useRouter()
  const { slug } = router.query;
  const issueId = slug && slug.length > 0
  ? slug[0] : magazineIssues[0].issueId

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/87_88/pINT 2.png" className={styles.line} />
      <img src="./magazine/1/images/last-page.jpg" className={styles.rightBack} />
      <div className={styles.mainTitle}>Mod the Metaverse.</div>
      <div className={styles.text}>
        DIGIFIZZY is for the dreamers, the creators, the players, the technologists, the developers,
        the risk takers. It’s for anyone out there that truly believes in the potentiality of where
        we are headed. It’s for those that want to be part of building the right metaverse,
        underwriting it with the value and ethos that we keep being promised, but is yet to actually
        play out.
        <br />
        <br />
        We are all climbing a mountain that has never been climbed before. Charting a new course.
        There is no textbook or pre-prepared answers for what is to come as we traverse these new
        plains. But ultimately, there doesn’t need to be. Because we all already know the map that
        we want to navigate. It’s one that ensures openness, vitality and allows us the ability to
        spin up personal decentralised realms with dynamic access keys.
        <br />
        <br />
        It’s one that allows us to mod— to break everything down into all of its parts, tweak it,
        mess around with it, and then reassemble it into something new, novel, generative— engage in
        the practice of driving growth, continued betterness. As we build out these new
        decentralised networks and ecosystems we must make sure that humanity stays at the heart of
        it. We must take control of our own identities, our own quests, and not be conformed by a
        legacy frame that does no justice but to make us ponder “Cui bono?”.
        <br />
        <br />
        <b>DIGIFIZZY is for the gatemakers.</b>
        <br />
        <br />
        It’s not just the pursuit for enabling greater potentiality in all of us, but rather,
        actually making it happen. I invite you all to join us in living this through. That’s all it
        is. A leap of faith.
        <br />
        <br />
        To be continued.
      </div>
      <div className={styles.bottomText}>- Emma-Jane MacKinnon-Lee</div>
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
  );
};

export default Page8788;
