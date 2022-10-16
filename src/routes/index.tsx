import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { hexToRGBA } from 'utils'
import Header from 'components/Header'
import Home from './Home'
import Detail from './Detail'

const Wrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => hexToRGBA(theme.colors.gray1, 0.7)};
`

const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </main>
    </Wrapper>
  )
}

export default App
