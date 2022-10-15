import { Routes, Route } from 'react-router-dom'

import Detail from './Detail'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
