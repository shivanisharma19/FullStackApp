package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Student {

    @Id
    private String _id;
    private String studentName;
    private String studentAddress;
    private Number mobile;

    public Student(String _id, String studentName, String studentAddress, Number mobile) {
        this._id = _id;
        this.studentName = studentName;
        this.studentAddress = studentAddress;
        this.mobile = mobile;
    }

    public Student() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }

    public Number getMobile() {
        return mobile;
    }

    public void setMobile(Number mobile) {
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "Student{" +
                "_id='" + _id + '\'' +
                ", studentName='" + studentName + '\'' +
                ", studentAddress='" + studentAddress + '\'' +
                ", mobile=" + mobile +
                '}';
    }
}
