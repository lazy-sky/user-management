import { useMemo, useState } from 'react'
import styled from 'styled-components'
import cloneDeep from 'lodash.clonedeep'

import { IUser } from 'types/user'
import { hexToRGBA, sortByDate } from 'utils'
import UserItem from 'components/UserItem'

const UserListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-height: calc(40vh - 80px);
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop`
    max-height: 80vh;
  `}

  .headerRow {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background: ${({ theme }) => hexToRGBA(theme.colors.purple, 0.5)};
    padding: 10px 20px;
    font-size: 15px;
    line-height: 19px;
    font-weight: 700;

    select {
      display: block;
      margin: 0 auto;
    }
  }

  ul {
    overflow-y: auto;

    li {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      gap: 12px;
      padding: 10px 20px;
      font-weight: 300;
      font-size: 15px;
      line-height: 19px;
      border-bottom: 1px solid #ebebeb;

      &:last-child {
        border: none;
      }

      .checkbox {
        text-align: center;
      }

      &.active {
        color: ${({ theme }) => theme.colors.blue};
        background: ${({ theme }) => hexToRGBA(theme.colors.blue, 0.3)};
      }
    }
  }
`
interface IUserListProps {
  users: IUser[]
  canControl?: boolean
}

const UserList = ({ users, canControl = true }: IUserListProps) => {
  const [sortingBy, setSortingBy] = useState('asc')
  const sortedUsers = useMemo(() => sortByDate(cloneDeep(users), sortingBy), [sortingBy, users])

  const handleSortingChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSortingBy(e.currentTarget.value)
  }

  return (
    <UserListWrapper>
      <div className='headerRow'>
        <div>이름</div>
        <div>생년월일</div>
        <div>
          <select onChange={handleSortingChange}>
            <option value='asc'>오름차순</option>
            <option value='desc'>내림차순</option>
          </select>
        </div>
      </div>
      <ul>
        {sortedUsers.length ? (
          sortedUsers.map((user) => <UserItem key={user.id} user={user} canControl={canControl} />)
        ) : (
          <li>유저가 없습니다.</li>
        )}
      </ul>
    </UserListWrapper>
  )
}

export default UserList
