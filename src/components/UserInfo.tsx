import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getCurrentUser } from 'states/currentUser'
import { formatDate, hexToRGBA } from 'utils'
import defaultProfile from 'assets/images/default.png'

const UserInfoStyle = styled.div`
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop`
    width: 300px;
  `}

  .profileBackground {
    background: ${({ theme }) => hexToRGBA(theme.colors.purple, 0.5)};
    position: relative;
    height: 172px;
    margin-bottom: 68px;

    .profileImage {
      position: absolute;
      top: 30px;
      left: calc((100% - 180px) / 2);
      width: 180px;
      height: 180px;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 100px;
      box-shadow: 1px 5px 10px 6px rgba(36, 26, 107, 0.15);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  dl {
    padding: 0 25px;
    background: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    line-height: 19px;

    > div {
      display: grid;
      grid-template-columns: 100px 1fr;
      padding: 10px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};

      &:last-child {
        border: none;
      }

      dt {
        font-weight: 700;
      }

      dd {
        font-weight: 300;
      }
    }
  }
`

const UserInfo = () => {
  const currentUser = useSelector(getCurrentUser)
  const { name, date, comment } = currentUser

  let profileImage = ''
  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    profileImage = require(`assets/images/${currentUser.image}`)
  } catch (error) {
    profileImage = defaultProfile
  }

  return (
    <UserInfoStyle>
      <div className='profileBackground'>
        <div className='profileImage'>
          <img src={profileImage} alt={name} />
        </div>
      </div>
      <dl>
        <div>
          <dt>이름</dt>
          <dd>{name}</dd>
        </div>
        <div>
          <dt>생년월일</dt>
          <dd>{formatDate(date)}</dd>
        </div>
        <div>
          <dt>한마디</dt>
          <dd>{comment}</dd>
        </div>
      </dl>
    </UserInfoStyle>
  )
}

export default UserInfo
