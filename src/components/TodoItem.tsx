
import React from "react";
import { useState, useEffect } from "react";

type TodoItem = {
	id: number;
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
  
    const addTodo = (todo: string) => {
      const newTodo = {
        id: Math.random(),
        todo: todo,
      }
      // add new todo to the list
      setList([...list, newTodo])
      // clear input
      setInput('')
    
    }
        //interact with localStorage every time the list array changes
    useEffect(() => {
        //update the 'list' key inside localStorage
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

  
    const deleteTodo = (id:Number) => {
      // filter out the todo that has the id
      setList(list.filter((todo:TodoItem) => todo.id !== id))
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