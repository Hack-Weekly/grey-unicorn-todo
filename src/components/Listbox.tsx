import TodoItem from "./TodoItem";

type TodoItem = {
    id: number;
    todo: string;
}

const Listbox = ({ list, deleteTodo }: any) => {
    return (
        <ul>
            {list.map((todo: TodoItem) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    )
}

export default Listbox