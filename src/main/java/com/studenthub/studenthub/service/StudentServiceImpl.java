package com.studenthub.studenthub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.studenthub.studenthub.model.Student;
import com.studenthub.studenthub.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository sr;

    public Student saveStudent(Student student)
    {
        return sr.save(student);
    }

}
