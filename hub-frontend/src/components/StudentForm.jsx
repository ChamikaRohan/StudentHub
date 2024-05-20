import{React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';


export default function StudentForm() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: '150px auto'}
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/student/getAll')
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            setStudents(res);}
        )
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const student = {name, address};
        fetch("http://localhost:8080/student/add",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("User added sucessfully!")
        }).catch((error)=>{
            console.log(error);
        })
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

        <Paper elevation={5} style={paperStyle}>
            <h1 style={{marginBottom: "50px"}}>Students Details</h1>
            {students.map(student=>(
                <Paper elevation={5} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={student.id}>
                    Student ID: {student.id}<br/>
                    Student Name: {student.name}<br/>
                    Student Address: {student.address}<br/>
                </Paper>
            ))}
        </Paper>
    </Container>
  );
}


