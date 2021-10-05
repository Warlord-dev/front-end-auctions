import React from 'react'
import styles from './styles.module.scss'

const UserInfo = props => {
  const { userName, userAvatar, onClickLove, viewCount, loveCount } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        { userName }’s <br />
        Web3 Fashion Inventory
      </div>
      <div className={styles.avatar}>
        <img className={styles.avatarImage} src={userAvatar ? userAvatar : '/images/user-profile/user-avatar-large.png'} />
        <div className={styles.lovesWrapper}>
          <div className={styles.lovesContainer}>
            <div className={styles.leftSide}>
              <button type='button' className={styles.loveButton} onClick={onClickLove}>
                <img src='/images/user-profile/profile-loves-icon.png' />
              </button>

              <div className={styles.label}>
                LOVES
              </div>
            </div>
            <div className={styles.rightSide}>
            {
              loveCount
            }
            </div>
          </div>

          <div className={styles.viewsContainer}>
            <div className={styles.leftSide}>
              <img src='/images/user-profile/profile-views-icon.png' />
              <div className={styles.label}>
                VIEWS
              </div>
            </div>
            <div className={styles.rightSide}>
            {
              viewCount
            }
            </div>
          </div>
        </div>
      </div>

      <div className={styles.userNameHere}>
        {
          userName
        }
      </div>

      <div className={styles.bottomLine}></div>
    </div>
  )
}

export default UserInfo