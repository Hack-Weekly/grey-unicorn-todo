import { useState } from 'react'
import TodoItem from './components/TodoItem'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <h1>Todo</h1>
      <TodoItem></TodoItem>
    </div>

  )
}

export default App
