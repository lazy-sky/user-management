import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { toggleUserChecked } from 'services/data'
import { getUsers } from 'states/users'

const ButtonWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};

  button {
    width: 100%;
    padding: 8px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;

    &:hover {
      cursor: pointer;
    }
  }
`

const SaveButton = () => {
  const users = useSelector(getUsers)

  const handleSaveClick = () => {
    for (const user of users) {
      toggleUserChecked(user.id, user.checked)
    }

    const MySwal = withReactContent(Swal)
    MySwal.fire('저장되었습니다.')
  }
  return (
    <ButtonWrapper>
      <button type='button' onClick={handleSaveClick} className='saveBtn'>
        저장하기
      </button>
    </ButtonWrapper>
  )
}

export default SaveButton
