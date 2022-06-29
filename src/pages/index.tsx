import { switchTheme } from 'app/features/theme/themeSlice'
import { RootState } from 'app/store'
import FavoriteButton from 'components/FavoriteButton'
import Loading from 'components/Loading'
import Pagination from 'components/Pagination'
import ThemeSwitch from 'components/ThemeSwitch'
import UserCard from 'components/UserCard'
import { DEBOUNCE_DURATION, DEFAULT_PER_PAGE, GITHUB_ENDPOINT } from 'config'
import { axiosConfig } from 'config/axios'
import debounce from 'lodash.debounce'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import queryString from 'query-string'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Switch from 'react-switch'
import styled from 'styled-components'
import { IUser, Query } from 'types'
import { Theme } from 'types/enum'
import { normalizeSearchTerm } from 'utils'
import { searchhUserWithDetail } from 'utils/fetch-user'

const HomePageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
`

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchInput = styled.input`
  font-size: 15px;
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.42);
  border-radius: 4px;
  margin-top: 1rem;
  color: ${(props) => props.theme.inputText};
  background: ${(props) => props.theme.inputBg};

  ::placeholder {
    color: ${(props) => props.theme.inputPlaceholder};
  }
`

const EmptyPlaceholerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    margin: 0 auto;
  }

  p {
    text-align: center;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 300;
    line-height: 1.3;
  }
`

export const CenterDiv = styled.div`
  width: fit-content;
  margin: 0 auto;
`

const MainContainer = styled.div`
  height: 88%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const UserCardListContainer = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-template-rows: min-content;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const FavoriteButtonContainer = styled.div`
  position: absolute;
  right: 16rem;
  top: 3.8rem;
`

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    if (!searchTerm) return
    searchUser(searchTerm, page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, page])

  const searchUser = useCallback(async (value: string, pageNumber: number) => {
    const query: Query = {
      q: normalizeSearchTerm(value),
      per_page: DEFAULT_PER_PAGE,
      page: pageNumber,
    }

    try {
      setLoading(true)
      const { totalCount, userList } = await searchhUserWithDetail(query)

      setTotalPages(totalCount)
      setUsers(userList)
    } catch (error) {
      console.error('Error in onSearchInputChange function', error)
    } finally {
      setLoading(false)
    }
  }, [])

  async function onSearchInputChange(
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const rawValue: string = e.target.value
    setSearchTerm(rawValue)
  }

  const debouncedOnSearch = debounce(onSearchInputChange, DEBOUNCE_DURATION)

  function onPageChange(newPage: number): void {
    if (newPage === page) return
    setPage(newPage)
  }

  return (
    <HomePageContainer>
      <Head>
        <title>Github Search</title>
        <meta name='description' content='A Github search app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FavoriteButtonContainer>
        <FavoriteButton />
      </FavoriteButtonContainer>

      <SearchContainer>
        <FlexContainer>
          <Heading>Search</Heading>
          <ThemeSwitch />
        </FlexContainer>

        <SearchInput
          type='text'
          placeholder='Enter Github username, i.e "dan"'
          onChange={debouncedOnSearch}
        />
      </SearchContainer>

      <MainContainer>
        {loading && <Loading />}

        {users && !loading && (
          <UserCardListContainer>
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                searchWords={[normalizeSearchTerm(searchTerm)]}
              />
            ))}
          </UserCardListContainer>
        )}

        {!users && !loading && (
          <EmptyPlaceholerContainer>
            <div>
              <Image
                src='/images/github-logo.png'
                width={120}
                height={120}
                alt='github logo'
              />
              <Image
                src='/images/github-logo-text.png'
                width={139}
                height={57}
                alt='github text'
              />
              <p>
                Enter GitHub username and search users matching the input like
                Google Search, click avatars to view more details, including
                repositories, followers and following.
              </p>
            </div>
          </EmptyPlaceholerContainer>
        )}
      </MainContainer>

      {totalPages > 0 && (
        <CenterDiv>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onChange={onPageChange}
          />
        </CenterDiv>
      )}
    </HomePageContainer>
  )
}

export default Home
