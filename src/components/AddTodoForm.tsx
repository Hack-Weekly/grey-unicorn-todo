import { useState } from "react";

// MUI Components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function AddTodoForm({ addTodo }: any) {

    const [input, setInput] = useState('')

    function handleClick() {
        addTodo(input)
        setInput('')
    }

    return (

        <Box onSubmit={(e) => e.preventDefault()} component="form" sx={{my: 4}}>

            <Grid container>
                <Grid item xs={9}>
                    <TextField
                        variant="standard"
                        required
                        size="small"
                        label="What do you need to do?"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="button"
                        onClick={handleClick}
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}