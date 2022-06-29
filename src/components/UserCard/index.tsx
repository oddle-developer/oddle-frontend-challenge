import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { IUser } from 'types'
import Highlighter from 'react-highlight-words'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import cls from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { like } from 'app/features/user/userSlice'
import { RootState } from 'app/store'
import { ICON_SIZE } from 'pages/users/[username]'
import { Theme } from 'types/enum'

const UserCardContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 0.8rem;
  gap: 1rem;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.cardText};
  background-color: ${(props) => props.theme.cardBg};

  &:hover {
    background-color: #efefef;
    transition: background-color 0.2 ease-in;
  }

  div {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  strong {
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.3rem;
  }
`

const CardContainer = styled.div`
  position: relative;
  height: fit-content;
`

const HeartContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-20%);
  padding: 3px;
  z-index: 9999;
  cursor: pointer;
`

interface IUserCardProps {
  user: IUser
  searchWords?: string[]
}

const UserCard = (props: IUserCardProps): JSX.Element => {
  const { user, searchWords } = props
  const userStore = useSelector((state: RootState) => state.user)
  const themeStore = useSelector((state: RootState) => state.theme)
  const { type: themeType } = themeStore
  const { likeList } = userStore
  const dispatch = useDispatch()

  function onHeartClick(userId: number, userName: string): void {
    dispatch(like({ id: userId, userName }))
  }

  const displayName: string = user.name ?? `@${user.login}`
  const isLiked: boolean = !!likeList[user.id]

  return (
    <CardContainer>
      <Link
        href={{
          pathname: '/users/[username]',
          query: {
            username: user.login,
          },
        }}
        passHref
      >
        <UserCardContainer>
          <>
            <Image
              src={user.avatar_url ?? '/images/default-profile.png'}
              alt='user avatar'
              width={64}
              height={64}
              style={{ borderRadius: 10, border: '1px solid pink' }}
            />

            <div>
              <Highlighter
                highlightClassName='highlightText'
                searchWords={searchWords ?? ['']}
                autoEscape={true}
                textToHighlight={displayName}
                highlightStyle={{
                  fontWeight: 700,
                  backgroundColor: 'transparent',
                  fontSize: '1.7rem',
                  color: themeType === Theme.LIGHT ? '#000' : '#fff',
                }}
                unhighlightStyle={{ fontWeight: 400, fontSize: '1.7rem' }}
              />

              <span style={{ marginTop: '0.5rem' }}>
                {user.followers} followers
              </span>

              <span>{user.following} followings</span>
            </div>
          </>
        </UserCardContainer>
      </Link>

      <HeartContainer onClick={() => onHeartClick(user.id, user.login)}>
        <FaHeart size={ICON_SIZE} color={isLiked ? 'red' : 'gray'} />
      </HeartContainer>
    </CardContainer>
  )
}

export default UserCard
