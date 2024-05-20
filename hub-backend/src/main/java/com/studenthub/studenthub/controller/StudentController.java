package com.studenthub.studenthub.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.studenthub.studenthub.model.Student;
import com.studenthub.studenthub.service.StudentService;

@CrossOrigin //Resolved Cross-Origin Resource Sharing policy issue
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService ss;

    @PostMapping("/add")
    public String add(@RequestBody Student student)
    {
        ss.saveStudent(student);
        return "Student saved succesfully!";
    }

    @GetMapping("/getAll")
    public List<Student> getAll()
    {
        return ss.getAllStudents();
    } 
}
