import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// type Likes = Record<number, boolean>
type Likes = Record<string, number>

export interface UserState {
  value: number
  likeList: Likes
}

const initialState: UserState = {
  value: 100,
  likeList: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    like: (
      state,
      { payload }: PayloadAction<{ id: number; userName: string }>
    ) => {
      const { likeList } = state
      const existed = likeList[payload.id]
      if (existed) {
        delete state.likeList[payload.id]
      } else {
        state.likeList = { ...likeList, [payload.id]: payload.userName }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { like } = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer
