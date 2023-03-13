import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, deleteTodo }: any) => {
  return (
    <Grid container sx={{ px: 4, borderLeft: "1px solid #fff"}}>
      <Grid item xs={8}>
        <Typography variant="body1">{todo.todo}</Typography>
      </Grid>
      <Grid item xs={4}>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default TodoItem;
