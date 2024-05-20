package com.studenthub.studenthub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studenthub.studenthub.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
    
}
