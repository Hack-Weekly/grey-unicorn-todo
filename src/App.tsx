import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import Listbox from './components/Listbox'
import Footer from './components/Footer'

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import { createTheme, ThemeProvider } from '@mui/material/styles';

type TodoItem = {
  id: number;
  todo: string;
}

function App() {

  const [list, setList] = useState(() =>
    // initialize state by accessing localStorage 
    // get item with key of 'list'
    // parse value we're grabbing
    JSON.parse(localStorage.getItem('list') || '[]'))

  const addTodo = (todo: string) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }
    // add new todo to the list
    setList([...list, newTodo])

  }
  //interact with localStorage every time the list array changes
  useEffect(() => {
    // update the 'list' key inside localStorage
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  const deleteTodo = (id: Number) => {
    // filter out the todo that has the id
    setList(list.filter((todo: TodoItem) => todo.id !== id))
  }

  const theme = createTheme({
    palette: {
      mode: "dark",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: "100%",
      }}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{
          py: 4,
          minHeight: "100vh",
        }}
        >

          <Header />
          <AddTodoForm addTodo={addTodo} />
          <Listbox list={list} deleteTodo={deleteTodo} />

        </Container>
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
