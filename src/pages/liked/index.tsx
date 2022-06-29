import { RootState } from 'app/store'
import HomeButton from 'components/HomeButton'
import Loading from 'components/Loading'
import ThemeSwitch from 'components/ThemeSwitch'
import UserCard from 'components/UserCard'
import { axiosConfig } from 'config/axios'
import useLoading from 'hooks/useLoading'
import Head from 'next/head'
import { UserCardListContainer } from 'pages'
import { HomeButtonContainer, SwitchContainer } from 'pages/users/[username]'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { IUser, Query } from 'types'

interface ILikedPageProps {}

const MainContainer = styled.div`
  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const EmptyText = styled.p`
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LikedPage = (props: ILikedPageProps): JSX.Element => {
  const userStore = useSelector((state: RootState) => state.user)
  const { likeList } = userStore
  const loading = useLoading()

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchAllLikedUsers()
  }, [])

  async function fetchAllLikedUsers() {
    const userNameList = Object.values(likeList)
    const promises = userNameList.map((userName) => {
      const query: Query = {
        q: userName,
      }
      return axiosConfig.get(`/users/${userName}`)
    })
    const usersResponse = await Promise.all(promises)
    const userList = usersResponse.map((item) => item.data)
    setUsers(userList)
  }

  return (
    <>
      <Head>
        <title>Github Search | Favorites</title>
        <meta name='description' content='A Github search app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainContainer>
        <SwitchContainer>
          <ThemeSwitch />
        </SwitchContainer>

        <HomeButtonContainer>
          <HomeButton />
        </HomeButtonContainer>

        {loading && <Loading />}

        {!loading && users.length === 0 && (
          <EmptyText>{`You haven't liked anyone`}</EmptyText>
        )}

        {!loading && users && (
          <>
            <div style={{ marginTop: '2rem' }} />
            <UserCardListContainer>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </UserCardListContainer>
          </>
        )}
      </MainContainer>
    </>
  )
}

export default LikedPage
