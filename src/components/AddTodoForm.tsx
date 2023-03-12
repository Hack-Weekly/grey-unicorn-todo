import { useState } from "react"

export default function AddTodoForm({addTodo}: any) {

    const [input, setInput] = useState('')

    function handleClick() {
        addTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                value={input}
                placeholder="What do you need to do?"
                onChange={e => setInput(e.target.value)}
            />
            <button type="button" onClick={handleClick}> Add </button>
        </form>
    )
}