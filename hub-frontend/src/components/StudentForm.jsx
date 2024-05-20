import{React, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';


export default function StudentForm() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: '150px auto'}
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
 
    }
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
            autoComplete="off">
                <TextField value={name} onChange={(e)=>{setName(e.target.value)}} id="standard-basic" label="Student name" variant="outlined" fullWidth />
                <TextField value={address} onChange={(e)=>{setAddress(e.target.value)}} id="standard-basic" label="Student Address" variant="outlined" fullWidth />
                <Button onClick={handleSubmit} size="large"  variant="contained" color="success">
                Submit
                </Button>
           </Box>
        </Paper>
    </Container>
  );
}


