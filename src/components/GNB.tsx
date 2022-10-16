import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import cx from 'classnames'

import { hexToRGBA } from 'utils'

const menuItems = [
  {
    text: 'PAGE 01',
    link: '/',
  },
  {
    text: 'PAGE 02',
    link: '/detail',
  },
]

const Navigation = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(${menuItems.length}, 1fr);

    li {
      text-align: center;

      > a {
        display: block;
        padding: 14px 0;
        background: ${({ theme }) => hexToRGBA(theme.colors.blue, 0.2)};
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        &.active {
          background: ${({ theme }) => theme.colors.blue};
          font-weight: 700;
        }
      }
    }
  }
`

const GNB = () => {
  return (
    <Navigation>
      <ul>
        {menuItems.map(({ text, link }) => (
          <li key={text}>
            <NavLink to={link} end className={({ isActive }) => cx(isActive && 'active')}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Navigation>
  )
}

export default GNB
