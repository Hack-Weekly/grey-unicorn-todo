import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const Footer = () => {
    return (
        <Grid component="footer" container sx={{
            padding: 3
        }}>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Stack:</Typography>
                <Typography variant="body1" gutterBottom>React, Typescript, Vite</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Created by:</Typography>
                <Stack direction="row" spacing={2}>
                    <Link href="https://github.com/edypaul" color="inherit">edypaul</Link>
                    <Link href="https://github.com/Hector-bit" color="inherit">Hector-Bit</Link>
                    <Link href="https://github.com/kouglas" color="inherit">Kari</Link>
                    <Link href="https://github.com/z-index-1" color="inherit">Z-Index-1</Link>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Footer