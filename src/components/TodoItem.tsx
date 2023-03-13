
import React from "react";
import { useState, useEffect } from "react";

type TodoItem = {
	id: number;
	todo: string;

}

const TodoItem = () => {
  // track check box state
    const [checked, setChecked] = useState([])

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
      // prevent empty inputs
      if(todo === "") return
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

  
    const deleteTodo = (id: Number) => {
      // filter out the todo that has the id
      setList(list.filter((todo:TodoItem) => todo.id !== id))
    }

    const handleCheck = (event) => {
      let updatedList = [...checked]
      if(event.target.checked){
        updatedList = [...checked, event.target.value]
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1)
      }
      setChecked(updatedList)
      console.log(updatedList)
    }
// give checked item a class of "checked-item"
    const isChecked = (item) => 
      checked.includes(item) ? "checked-item" : "not-checked-item"
    

    return (
        <div>
          <form onSubmit={(e)=>e.preventDefault()} >
          <input
            type="text" 
            value= {input}
            placeholder= "What do you need to do?" 
            onChange={e => setInput(e.target.value)}
          />
            <button type="button" onClick={() => addTodo(input)}> Add </button>
          </form>
          <div className="listContainer">
            {list.map((todo: TodoItem, index: number) => (
              <div key={index} >
                <input type="checkbox" value={todo.todo}  onChange={handleCheck}/>
                <span className={isChecked(todo.todo)}>{todo.todo} <button onClick={() => deleteTodo(todo.id)}>&times;</button></span>
              </div>
            ))}
          </div>


          {/* old list function that uses ul / li */}
            {/* <ul>
                {list.map((todo:TodoItem) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button
                            onClick={() => deleteTodo(todo.id)}
                        > &times;</button>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default TodoItem;
