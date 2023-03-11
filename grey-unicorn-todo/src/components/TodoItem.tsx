
import React from "react";
import { useState, useEffect } from "react";

type TodoItem = {
	index: number;
	todo: string;

}

const TodoItem = () => {

    const [list, setList] = useState( () =>
        // initialize state by accessing localStorage 
        // get item with key of 'list'
        // parse value we're grabbing
      JSON.parse(localStorage.getItem('list') || '') 
      || [])
    const [input, setInput] = useState('')
    const [editId, setEditId] = useState(0)
    const addTodo = (todo: string) => {
      if (todo !== ''){
        const newTodo = {
          index: Math.random(),
          todo: todo,
        }
        setList([...list, newTodo])
        // add new todo to the list
        // clear input
        setInput('')
      }

      if (editId) {
        
        const editTodo = list.find((todo:TodoItem) => todo.index === editId)
        const updatedTodoList = list.map((todo:TodoItem) => {
          todo.index === editId ? editTodo : todo})
        setList(updatedTodoList)
        setEditId(0)
      }
    }
        //interact with localStorage every time the list array changes
    useEffect(() => {
        //update the 'list' key inside localStorage
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

  
    const deleteTodo = (index:Number) => {
      // filter out the todo that has the id
      setList(list.filter((todo:TodoItem) => todo.index !== index))
    }

    const editTodo = (index:Number) => {
      const editTodo = list.find((todo:TodoItem) => todo.index === index)
      setInput(editTodo.todo);
      setEditId(
        editTodo.index
      )
    }



    return (
        <div>
          <form onSubmit={(e)=>e.preventDefault()} action="">
          <input 
            type="text" 
            value= {input}
            placeholder= "What do you need to do?" 
            onChange={e => setInput(e.target.value)}
          />
            <button type="button" onClick={() => addTodo(input)}> Add </button>
          </form>
            <ul>
                {list.map((todo:TodoItem) => (
                    <li key={todo.index}>
                        {todo.todo}
                        {todo.index}
                        <button
                            onClick={() => deleteTodo(todo.index)}
                        > &times;</button>
                        <button
                            onClick={() => editTodo(todo.index)}
                        > Edit </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoItem;
