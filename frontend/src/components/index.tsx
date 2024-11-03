import React, { useEffect, useState } from "react";
import { StudentForm } from './StudentFrom.tsx'
import { StudentTable } from './StudentTable.tsx'
import { student } from "../common/interfaces.ts";
import { getStudentDetails } from "./slice.ts";

export const Students = () => {

    const [studentList, setStudentList] = useState<student[]>()

    useEffect(() => {
        const fetchStudentList = async () => {
        const students = await getStudentDetails()
        setStudentList(students)
        }
        fetchStudentList()
      }, []) 
      
    return (
        <>
         <StudentForm setStudentList={setStudentList}/>
         <StudentTable studentList={studentList} />
        </>
        )
}