const TodoItem = ({todo, deleteTodo}: any) => {
  return (
    <li>
      {todo.todo}
      <button
        onClick={() => deleteTodo(todo.id)}
      > &times;</button>
    </li>
  )
}

export default TodoItem;
