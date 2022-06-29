import { ICON_SIZE, RowDiv } from 'pages/users/[username]'
import { Repository } from 'types'
import { AiFillStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import styled from 'styled-components'

interface IRepoCardProps {
  repo: Repository
}

const RepoCardContainer = styled.div`
  max-width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 0.8rem;
  gap: 1rem;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
    flex: 1;
  }

  span {
    font-size: 1.4rem;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem auto;
`

const RepoCard = (props: IRepoCardProps): JSX.Element => {
  const {
    repo: { id, name, stargazers_count, forks_count, full_name },
  } = props

  function openRepoPage() {
    const githubUrl: string = 'https://github.com/' + full_name
    window.open(githubUrl, '_blank')
  }

  return (
    <RepoCardContainer onClick={openRepoPage}>
      <strong>{name}</strong>

      <Row>
        <AiFillStar size={ICON_SIZE} color='#ecc550' />
        <span>{stargazers_count}</span>
      </Row>

      <Row>
        <BiGitRepoForked size={ICON_SIZE} color='#bd05bd' />
        <span>{forks_count}</span>
      </Row>
    </RepoCardContainer>
  )
}

export default RepoCard
