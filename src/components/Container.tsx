import styled from 'styled-components'

import { hexToRGBA } from 'utils'

const ContainerStyle = styled.div`
  padding: 20px;
  background: ${({ theme }) => hexToRGBA(theme.colors.gray1, 0.7)};
`

interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps) => {
  return <ContainerStyle>{children}</ContainerStyle>
}

export default Container
