import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from 'types/user'
import { RootState } from 'states'

interface ICurrentUserState {
  currentUser: IUser
}

const initialState = {
  currentUser: {
    id: 0,
    name: 'noname',
    date: '1900-01-01 11:11:11',
    comment: 'comment',
    image: 'default.png',
    checked: false,
  },
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state: ICurrentUserState, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = currentUserSlice.actions

export default currentUserSlice.reducer

// Selector
export const getCurrentUser = (state: RootState): IUser => state.currentUser.currentUser
