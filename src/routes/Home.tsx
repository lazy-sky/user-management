import { useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'

import { getUsers, setUsers } from 'states/users'
import { getUserData } from 'services/data'
import Container from 'components/Container'
import UserList from 'components/UserList'
import SaveButton from 'components/SaveButton'
import { ArrowDownIcon } from 'assets/svgs'

const Home = () => {
  const dispatch = useDispatch()
  const users = useSelector(getUsers)

  useMount(async () => {
    const userData = await getUserData()
    dispatch(setUsers(userData))
  })

  return (
    <Container>
      <UserList users={users} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ArrowDownIcon />
      </div>
      <UserList users={users.filter(({ checked }) => checked)} canControl={false} />
      <SaveButton />
    </Container>
  )
}

export default Home
