import { useEffect } from 'react'
import { getCoins } from './services/api-coin'

function App() {
  



  useEffect( () => {

    getCoins()

  }, [])

  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

export default App
