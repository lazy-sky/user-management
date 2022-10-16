import { IUser } from 'types/user'

export const sortByDate = (users: IUser[], order = 'asc') => {
  if (order === 'desc') {
    return users.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  return users.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
