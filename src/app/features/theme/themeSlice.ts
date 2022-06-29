import { createSlice } from '@reduxjs/toolkit'
import { themes } from 'config/theme'
import { Theme } from 'types/enum'

export interface ThemeState {
  type: Theme
  value: Record<string, string | number>
}

const initialState: ThemeState = {
  type: Theme.LIGHT,
  value: themes[Theme.LIGHT],
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      const isLightTheme: boolean = state.type === Theme.LIGHT
      state.type = isLightTheme ? Theme.DARK : Theme.LIGHT
      state.value = isLightTheme ? themes[Theme.DARK] : themes[Theme.LIGHT]
    },
  },
})

export const { switchTheme } = themeSlice.actions

const themeReducer = themeSlice.reducer
export default themeReducer
