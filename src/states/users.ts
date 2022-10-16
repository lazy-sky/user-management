import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from 'types/user'
import { RootState } from 'states'

interface IUsersState {
  users: IUser[]
}

const initUsers = [] as IUser[]

const initialState = {
  users: initUsers,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state: IUsersState, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer

// Selector
export const getUsers = (state: RootState): IUser[] => state.users.users
