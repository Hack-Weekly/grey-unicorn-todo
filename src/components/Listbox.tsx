import TodoItem from "./TodoItem";
import Stack from '@mui/material/Stack';

type TodoItem = {
    id: number;
    todo: string;
}

const Listbox = ({ list, deleteTodo }: any) => {
    return (
        <Stack direction="column" spacing={2}>
            {list.map((todo: TodoItem) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </Stack>
    )
}

export default Listbox