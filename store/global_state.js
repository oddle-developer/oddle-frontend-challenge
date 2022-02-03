import { createSlice, configureStore } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    favorites: [],
    filter:{
      keyword: '',
      page: 1,
    },
  },
  reducers: {
    setDarkMode: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.dark_mode = action.payload
    },
    addFavorite: (state, action) => {
      const user = action.payload
      const tmpFavorites = state.favorites
      tmpFavorites.push(user)
      state.favorites = tmpFavorites
    },
    removeFavorite: (state, action) => {
      const user = action.payload
      const tmpFavorites = state.favorites.filter(item => item.login !== user.login)
      state.favorites = tmpFavorites
    },
    getThemeMode: state => {
      return state.dark_mode
    },
    updateFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { setDarkMode, getThemeMode, addFavorite, removeFavorite, updateFilter } = themeSlice.actions
export const store = configureStore({
  reducer: themeSlice.reducer
})
store.subscribe(() => console.log(store.getState()))

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}
