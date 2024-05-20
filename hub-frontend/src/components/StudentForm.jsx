import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function StudentForm() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: '150px auto'}
  return (
    <Container>
        
        <Paper elevation={5} style={paperStyle}>
            <h1>Enter student details</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 5, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField id="standard-basic" label="Student name" variant="outlined" fullWidth />
                <TextField id="standard-basic" label="Student Address" variant="outlined" fullWidth />
           </Box>
        </Paper>
    </Container>
  );
}
