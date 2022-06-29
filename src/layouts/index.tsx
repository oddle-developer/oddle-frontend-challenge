import { RootState } from 'app/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { Theme } from 'types/enum'

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  display: grid;
  place-items: center;
`

const AppContainer = styled.div`
  width: 550px;
  height: 100%;
  max-height: 940px;
  padding: 3.2rem 1.6rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bg};
  position: relative;
`

interface ILayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const themeStore = useSelector((state: RootState) => state.theme)
  const { value } = themeStore

  return (
    <LayoutContainer>
      <ThemeProvider theme={value}>
        <AppContainer>{children}</AppContainer>
      </ThemeProvider>
    </LayoutContainer>
  )
}

export default Layout
