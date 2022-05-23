import { Routes, Route } from 'react-router-dom'
import DetailCoin from './components/detail/detail-coin'
import Home from './screens/home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info/:id' element={<DetailCoin />} />
      </Routes>
    </>
  )
}

export default App
