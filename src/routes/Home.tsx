import { useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import styled from 'styled-components'

import { getUsers, setUsers } from 'states/users'
import { getUserData } from 'services/data'
import Container from 'components/Container'
import UserList from 'components/UserList'
import SaveButton from 'components/SaveButton'
import { ArrowDownIcon } from 'assets/svgs'

const ArrowIcon = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.media.desktop`
    transform: rotate(0.75turn);
    width: 50px;
  `}
`

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
      <ArrowIcon>
        <ArrowDownIcon />
      </ArrowIcon>
      <div>
        <UserList users={users.filter(({ checked }) => checked)} canControl={false} />
        <SaveButton />
      </div>
    </Container>
  )
}

export default Home
