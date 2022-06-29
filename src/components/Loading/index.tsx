import React from 'react'
import { Triangle } from 'react-loader-spinner'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Loading = () => {
  return (
    <LoadingContainer>
      <Triangle height='100' width='100' color='grey' ariaLabel='loading' />
    </LoadingContainer>
  )
}

export default Loading
