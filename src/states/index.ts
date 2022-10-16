import { configureStore } from '@reduxjs/toolkit'

import users from 'states/users'
import currentUser from 'states/currentUser'

export const store = configureStore({
  reducer: {
    users,
    currentUser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
