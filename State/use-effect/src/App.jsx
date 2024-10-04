import { useState, useEffect} from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if(count < 5) {
      setCount(count + 1)
    }
  }, [count])

  return (
    <>
      <h1>Counter Demo with Use Effect</h1>
      {count}
      
    </>
  )
}

export default App
