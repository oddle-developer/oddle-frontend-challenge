import React from 'react'
import styled from 'styled-components'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Head from 'next/head'

const ButtonWrapper = styled.div`
  cursor: pointer;
`

const FavoriteButton = (): JSX.Element => {
  const router = useRouter()

  function redirecHome(): void {
    router.push('/liked')
  }

  return (
    <>
      <ButtonWrapper onClick={redirecHome}>
        <BsBookmarkHeartFill size={23} />
      </ButtonWrapper>
    </>
  )
}

export default FavoriteButton
