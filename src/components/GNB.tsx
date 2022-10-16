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
    align-items: center;

    ${({ theme }) => theme.media.desktop`
      gap: 35px;
      margin-right: 40px;
    `}

    li {
      text-align: center;

      > a {
        display: block;
        padding: 14px 0;
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => hexToRGBA(theme.colors.blue, 0.2)};
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;

        ${({ theme }) => theme.media.desktop`
          background: inherit;
        `}

        &.active {
          background: ${({ theme }) => theme.colors.blue};
          font-weight: 700;

          ${({ theme }) => theme.media.desktop`
            color: ${theme.colors.blue};
            background: inherit;
          `}
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
