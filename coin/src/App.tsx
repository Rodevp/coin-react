import { Routes, Route } from 'react-router-dom'
import DetailCoin from './components/detail/detail-coin'
import Home from './screens/home'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info/:id' element={<DetailCoin />} />
        <Route path='*' element={<h1>Pagina no encontrada</h1>} />
      </Routes>
    </div>
  )
}

export default App
