import styled from 'styled-components'

import { hexToRGBA } from 'utils'

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background: ${({ theme }) => hexToRGBA(theme.colors.gray1, 0.7)};

  ${({ theme }) => theme.media.desktop`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `}
`

interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default Container
