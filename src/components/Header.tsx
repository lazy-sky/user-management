import styled from 'styled-components'

import { hexToRGBA } from 'utils'
import logo from 'assets/images/logo.png'
import GNB from 'components/GNB'

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => hexToRGBA(theme.colors.blue, 0.6)};
  color: white;

  .logo {
    width: 169px;

    img {
      wdith: 100%;
    }
  }

  ${({ theme }) => theme.media.mobile`
    flex-direction: column; 
    .logo {
      padding: 20px;
    }
  `}
`

const Header = () => {
  return (
    <HeaderStyle>
      <div className='logo'>
        <img src={logo} alt='nara sapce logo' />
      </div>
      <GNB />
    </HeaderStyle>
  )
}

export default Header
