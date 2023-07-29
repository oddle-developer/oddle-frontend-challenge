import { switchTheme } from 'app/features/theme/themeSlice'
import { RootState } from 'app/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactSwitch from 'react-switch'
import { Theme } from 'types/enum'
import { MdDarkMode } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'
import styled from 'styled-components'

const ICON_SIZE: number = 30

const SwitchWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`

const ThemeSwitch = (): JSX.Element => {
  const díspatch = useDispatch()
  const themeStore = useSelector((state: RootState) => state.theme)
  const { type: themeType } = themeStore

  function onSwitchTheme(): void {
    díspatch(switchTheme())
  }

  return (
    <SwitchWrapper>
      <BsSunFill size={ICON_SIZE} />
      <ReactSwitch
        onChange={onSwitchTheme}
        checked={themeType === Theme.DARK}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <MdDarkMode size={ICON_SIZE} />
    </SwitchWrapper>
  )
}

export default ThemeSwitch
