import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoItem from './components/TodoItem'



function App() {

  return (

    <div>
      <Header />
      {/* <h1>Todo</h1> */}
      <TodoItem />
      <Footer />
    </div>

  )
}

export default App
