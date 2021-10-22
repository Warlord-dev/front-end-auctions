import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { getChainId, getAllUsers } from '@selectors/global.selectors'
import digitalaxApi from '@services/api/espa/api.service'
import { getAccount } from '@selectors/user.selectors'

import { getUser } from '@helpers/user.helpers'

import UserInfo from '@components/user-profile/user-info'
import DigitalChangingRoom from '@components/user-profile/digital-changing-room'
import Loader from '@components/loader'

import globalActions from '@actions/global.actions'

import styles from './styles.module.scss'

const UserProfile = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { address: walletAddress } = router.query
  const address = walletAddress ? walletAddress.toLowerCase() : null
  const [isInitLoading, setIsInitLoading] = useState(true)
  const [currentUserInfo, setCurrentUserInfo] = useState(null)
  const [loveCount, setLoveCount] = useState(0)
  const [viewCount, setViewCount] = useState(0)

  const allUsers = useSelector(getAllUsers).toJS();

  const account = useSelector(getAccount)
  const user = getUser()
  const secretKey = user ? user.randomString : null

  const isMyProfile = account && address && account.toLowerCase() === address.toLowerCase()

  const fetchViews = async () => {
    const viewData = await digitalaxApi.getViews('profile', address);
    setLoveCount(viewData && viewData[0] && viewData[0].loves ? viewData[0].loves.length : 0)

    if (viewData && viewData[0] && viewData[0].viewCount)
    {
      setViewCount(viewData[0].viewCount)
    }

    await addViewCount()
    
  }

  const addViewCount = async () => {
    const data = await digitalaxApi.addView('profile', address);
    if (data) {
      setViewCount(data.viewCount)
    }
  }

  const addLove = async () => {
    const data = await digitalaxApi.addLove(account, secretKey, 'profile', address)
    if (data && data['success']) {
      setLoveCount(loveCount + 1)
    }
  }

  const onClickLove = e => {
    addLove()
  }

  useEffect(() => {
    const loadUsers = async () => {
      const users = await digitalaxApi.getAllUsersName()
      dispatch(globalActions.setAllUsers(users))

      if (address) {
        const userInfo = users.find(item => item.wallet && item.wallet.toLowerCase() == address.toLowerCase())
        setCurrentUserInfo(userInfo)

        fetchViews()
      }
      
      setIsInitLoading(false)
    }

    loadUsers()
  }, [])

  if (isInitLoading) {
    return (
      <div style={{
        width: '100%',
        background: '#0A0A0A'
      }}>
        <div className={styles.wrapper}>
          <Loader
            className={styles.loader}
            active={true}
            size={"large"}
            white
          />
        </div>
      </div>
    )
  }

  if (!address || !currentUserInfo) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.notValidUser}>
         No active account with DIGITALAX
        </div>
      </div>
    )
  }

  const onClickReturn = () => {
    window.history.back()
  }
  
  return (
    <div style={{
      width: '100%',
      background: '#0A0A0A'
    }}>
      <div className={styles.wrapper}>
        <button
          className={styles.returnButton}
          onClick={onClickReturn}
        >
          RETURN
        </button>
        <UserInfo 
          userName={currentUserInfo.username}
          userAvatar={currentUserInfo.avatar}
          viewCount={viewCount}
          loveCount={loveCount}
          onClickLove={onClickLove}
          myProfile={isMyProfile}
        />

        <DigitalChangingRoom
          className={styles.digitalChangingRoom}
          owner={address}
        />
      </div>
    </div>
  )
}

export default UserProfile