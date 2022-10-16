import { useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'

import { getUserData } from 'services/data'
import { getUsers, setUsers } from 'states/users'
import Container from 'components/Container'
import UserInfo from 'components/UserInfo'
import UserList from 'components/UserList'

const Detail = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  useMount(async () => {
    const userData = await getUserData()
    dispatch(setUsers(userData))
  })

  return (
    <Container>
      <UserInfo />
      <UserList users={users.filter(({ checked }) => checked)} canControl={false} />
    </Container>
  )
}

export default Detail
