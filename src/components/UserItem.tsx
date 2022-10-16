/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useSelector, useDispatch } from 'react-redux'
import cx from 'classnames'

import { IUser } from 'types/user'
import { getUsers, setUsers } from 'states/users'
import { getCurrentUser, setCurrentUser } from 'states/currentUser'
import { formatDate } from 'utils'

interface IUserItemProps {
  user: IUser
  canControl?: boolean
}

const UserItem = ({ user, canControl = true }: IUserItemProps) => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)
  const currentUser = useSelector(getCurrentUser)

  const { id, name, date, checked } = user

  const handleUserClick = () => {
    dispatch(setCurrentUser(user))
  }

  const handleCheckToggle: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    dispatch(setUsers(users.map((item) => (item.id === id ? { ...item, checked: e.currentTarget.checked } : item))))
  }

  return (
    <li role='button' onClick={handleUserClick} className={cx(user.id === currentUser.id && 'active')}>
      <div>{name}</div>
      <div>{formatDate(date)}</div>
      {canControl && (
        <div className='checkbox'>
          <input type='checkbox' checked={checked} onChange={handleCheckToggle} />
        </div>
      )}
    </li>
  )
}
export default UserItem
