import React from 'react'
import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai'
import { useRouter } from 'next/router'

const ButtonWrapper = styled.div`
  cursor: pointer;
`

const HomeButton = (): JSX.Element => {
  const router = useRouter()

  function redirecHome(): void {
    router.push('/')
  }

  return (
    <ButtonWrapper onClick={redirecHome}>
      <AiFillHome size={25} />
    </ButtonWrapper>
  )
}

export default HomeButton
