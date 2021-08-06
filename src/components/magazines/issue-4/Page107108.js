import React from 'react'
import styles from './page107108.module.scss'
import UnlockPage from '../common/UnlockPage-Three'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Page107108 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/107108_background.png' className={styles.backgroundImage}/>
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
    
  )
}

export default Page107108
