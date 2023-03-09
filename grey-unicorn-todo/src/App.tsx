import { useState } from 'react'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <h1>Todo</h1>
      <TodoItem />
      <Footer />
    </div>

  )
}

export default App
