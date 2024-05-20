package com.studenthub.studenthub.service;

import java.util.List;

import com.studenthub.studenthub.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
