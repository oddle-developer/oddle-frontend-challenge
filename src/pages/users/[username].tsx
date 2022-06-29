import cls from 'classnames'
import FavoriteButton from 'components/FavoriteButton'
import HomeButton from 'components/HomeButton'
import Loading from 'components/Loading'
import Pagination from 'components/Pagination'
import RepoCard from 'components/RepoCard'
import ThemeSwitch from 'components/ThemeSwitch'
import UserCard from 'components/UserCard'
import { DEFAULT_PER_PAGE } from 'config'
import { axiosConfig } from 'config/axios'
import useLoading from 'hooks/useLoading'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CenterDiv, UserCardListContainer } from 'pages'
import queryString from 'query-string'
import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import styled from 'styled-components'
import { IUser, Query, Repository } from 'types'
import { Tabs } from 'types/enum'

const UserDetailCard = styled.div`
  font-size: 1.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 2.2rem;
  }
`

export const RowDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.3rem auto;
`

const TabsContainer = styled.ul`
  display: flex;
  align-items: center;
`

const TabItem = styled.li`
  display: flex;
  flex-direction: column;
  color: gray;
  text-align: center;
  background-color: ${(props) => props.theme.tabBg};
  border: 1px solid ${(props) => props.theme.tabBorder};
  border-radius: 2px;
  padding: 3px 0;
  /* border-color: #fff; */
  flex: 1;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &.active {
    color: ${(props) => props.theme.tabTextActive};
    font-weight: 600;
    border-radius: 2px 2px 0 0;
  }
`

const RepoListContainer = styled.ul`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: auto;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  height: 100%;
  overflow-y: scroll;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const EmptyDiv = styled.div`
  position: relative;
  flex: 1;
`

export const SwitchContainer = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 3.2rem;
`

export const HomeButtonContainer = styled(SwitchContainer)`
  left: 1.6rem;
  right: unset;
`

const FavoriteButtonContainer = styled(SwitchContainer)`
  left: 6rem;
  right: unset;
`

interface IUserDetailProps {
  user: IUser
  followers: IUser[]
  followings: IUser[]
  repositories: Repository[]
}

const USER_AVATAR_SIZE: number = 160 // unit: px
export const ICON_SIZE: number = 20 // unit: px

const UserDetail = (props: IUserDetailProps) => {
  const { user, repositories, followers, followings } = props
  const router = useRouter()
  const { username, page } = router.query

  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.REPOS)
  const loading = useLoading()

  function onTabClick(type: Tabs): void {
    setActiveTab(type)
  }

  function onPageChange(newPage: number): void {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: newPage,
      },
    })
  }

  function renderListByTab(): JSX.Element | null {
    if (activeTab === Tabs.REPOS) {
      return (
        <RepoListContainer>
          {repositories.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </RepoListContainer>
      )
    }
    if (activeTab === Tabs.FOLLOWERS) {
      return (
        <UserCardListContainer>
          {followers.map((follower) => (
            <UserCard key={follower.id} user={follower} />
          ))}
        </UserCardListContainer>
      )
    }
    if (activeTab === Tabs.FOLLOWINGS) {
      return (
        <UserCardListContainer>
          {followings.map((following) => (
            <UserCard key={following.id} user={following} />
          ))}
        </UserCardListContainer>
      )
    }
    return null
  }

  const totalPages: number = Math.ceil(user.public_repos / DEFAULT_PER_PAGE)

  return (
    <>
      <Head>
        <title>Github Search | {user.login}</title>
        <meta name='description' content='A Github search app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SwitchContainer>
        <ThemeSwitch />
      </SwitchContainer>

      <HomeButtonContainer>
        <HomeButton />
      </HomeButtonContainer>

      <FavoriteButtonContainer>
        <FavoriteButton />
      </FavoriteButtonContainer>

      <UserDetailCard>
        <UserInfoContainer>
          <Image
            src={user.avatar_url}
            alt='user avatar'
            width={USER_AVATAR_SIZE}
            height={USER_AVATAR_SIZE}
            style={{ borderRadius: '50%' }}
          />

          <RowDiv style={{ marginTop: '2rem' }}>
            <strong>{user.name ?? '(N/A)'}</strong>
          </RowDiv>

          <RowDiv>
            <AiOutlineUser size={ICON_SIZE} />
            <span>{user.login ?? '(N/A)'}</span>
          </RowDiv>

          <RowDiv>
            <HiLocationMarker size={ICON_SIZE} />
            <span>{user.location ?? '(N/A)'}</span>
          </RowDiv>
        </UserInfoContainer>

        <TabsContainer>
          <TabItem
            className={cls({ active: activeTab === Tabs.REPOS })}
            onClick={() => onTabClick(Tabs.REPOS)}
          >
            <span>Repositories</span>
            <span>({user.public_repos})</span>
          </TabItem>

          <TabItem
            className={cls({ active: activeTab === Tabs.FOLLOWERS })}
            onClick={() => onTabClick(Tabs.FOLLOWERS)}
          >
            <span>Followers</span>
            <span>({followers.length})</span>
          </TabItem>

          <TabItem
            className={cls({ active: activeTab === Tabs.FOLLOWINGS })}
            onClick={() => onTabClick(Tabs.FOLLOWINGS)}
          >
            <span>Followings</span>
            <span>({followings.length})</span>
          </TabItem>
        </TabsContainer>

        {loading && (
          <EmptyDiv>
            <Loading />
          </EmptyDiv>
        )}

        {!loading && renderListByTab()}

        {totalPages > 0 && (
          <CenterDiv>
            <Pagination
              currentPage={Number(page?.toString()) || 1}
              totalPages={totalPages}
              onChange={onPageChange}
            />
          </CenterDiv>
        )}
      </UserDetailCard>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { username, page = 1 },
  } = context

  const query: Query = {
    page: page as number,
    per_page: DEFAULT_PER_PAGE,
  }

  const userDetail = await axiosConfig.get(`/users/${username}`)
  const repositories = await axiosConfig.get(
    `/users/${username}/repos?${queryString.stringify(query)}`
  )

  const followers = await axiosConfig.get(`/users/${username}/followers`)
  const followings = await axiosConfig.get(`/users/${username}/following`)

  return {
    props: {
      user: userDetail.data,
      repositories: repositories.data,
      followers: followers.data,
      followings: followings.data,
    },
  }
}

export default UserDetail
