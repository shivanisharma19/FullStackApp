package com.example.backend.Controller;

import com.example.backend.Entity.Student;
import com.example.backend.Service.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/student")
public class StudentController {

    @Autowired
    private StudentServices studentServices;

    @PostMapping(value = "/save")
    private String saveStudent(@RequestBody Student students) {
        studentServices.saveOrUpdate(students);
        return students.get_id();
    }


    @GetMapping(value = "/getAll")
    private Iterable<Student>getStudents(){
        return studentServices.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private Student editStudent(@RequestBody Student student, @PathVariable(name="id")String _id) {
        student.set_id(_id);
        studentServices.saveOrUpdate(student);
        return student;
    }

    @DeleteMapping(value = "/delete/{id}")
    private Student deleteStudent(@RequestBody Student student, @PathVariable(name="id")String _id) {
        student.set_id(_id);
        studentServices.delete(student);
        return student;
    }

}
