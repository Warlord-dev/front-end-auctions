import React from 'react'
import Router, { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import UnlockPage from '../common/UnlockPage-Poap'
import styles from './page102.module.scss'

const Page102 = () => {
  const router = useRouter()
  const { slug } = router.query;
  const issueId = slug && slug.length > 0 && slug[0]
  const { contentUnlocked } = useSelector((state) => state.global.toJS());

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/109110_background_mobile.png' className={styles.image1} />
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page102