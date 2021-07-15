import React from 'react'
import styles from './page90.module.scss'
import Link from 'next/link';
import UnlockPage from '../common/UnlockPage-Three';
import Router, { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const Page90 = () => {
  const router = useRouter()
  const { slug } = router.query;
  const issueId = slug && slug.length > 0
  const { contentUnlocked } = useSelector((state) => state.global.toJS());
  return (
    <div className={styles.wrapper}>
     <img src="/magazine/3/images/101_102/image3.png" className={styles.image1}/>
     {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page90