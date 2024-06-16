package com.example.backend.Service;

import com.example.backend.Entity.Student;
import com.example.backend.Repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

    @Autowired
    private StudentRepo repo;

    public void saveOrUpdate(Student students) {
        repo.save(students);
    }

    public Iterable<Student> listAll() {
        return this.repo.findAll();
    }
}
