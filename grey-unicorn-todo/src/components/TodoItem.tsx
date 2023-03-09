
import React from "react";
import { useState } from "react";

const TodoItem = () => {

    const [list, setList] = useState([])
    const [input, setInput] = useState('')
  
    const addTodo = (todo) => {
      const newTodo = {
        id: Math.random(),
        todo: todo,
      }
      // add new todo to the list
      setList([...list, newTodo])
      // clear input
      setInput('')
    }
  
    const deleteTodo = (id) => {
      // filter out the todo that has the id
      setList(list.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            <input type="text" value= {input} onChange={e => setInput(e.target.value)}/>
            <button onClick={() => addTodo(input)}> Add </button>
            <ul>
                {list.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button
                            onClick={() => deleteTodo(todo.id)}
                        > &times;</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoItem;
