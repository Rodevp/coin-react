import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} >Incrementar</button>
    </div>
  )
}

export default App
