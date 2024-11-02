import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { student } from "../common/interfaces.ts";

export const StudentTable = () => {

  const [studentDetails, setStudentDetails] = useState<student[]>()

    useEffect(() => {
      const getStudentDetails = async() => {
      try {
        const response = await fetch('http://localhost:8089/api/v1/student/getAll', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }) 
        setStudentDetails(await response.json())
        console.log(await response.json())
    } catch (err)
    {
        toast.error('Student details not available')
    }
}
getStudentDetails()
}, [])     

      return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">
                Student Name
              </th>
              <th scope="col">
                Student Address
              </th>
              <th scope="col">
                Student Mobile
              </th>
              <th scope="col" className="options">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            { studentDetails?.map((student) =>
            <tr key={Math.random()}>
             <td>{student.studentName}</td>
             <td>{student.studentAddress}</td>
             <td>{student.mobile}</td>
             {/* <td style={{ height: 0}}>
              <svg className="edit"></svg>
              <svg className="delete"></svg>
             </td> */}
             </tr>)}
          </tbody>
        </table>
        </div>
      )
}