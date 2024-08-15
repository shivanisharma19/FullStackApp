import { toast } from 'react-toastify'
import { Action, createSlice } from '@reduxjs/toolkit'
import { student } from '../common/interfaces'


// export const studentList = createSlice({
//     name: 'students',
//     initialState: [] as student[],
//     reducers: {
//          setStudentList : (state, action) => {
//          window.localStorage.setItem('studentList', JSON.stringify({...action.payload}))
//         } 
//     }
// }) 

// export const { setStudentList } = studentList.actions

export const registerStudent = async(student: student) => {

    try {
        const response : Response = await fetch('http://localhost:8089/api/v1/student/save', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student)   
        })
        if(response.status === 200) {
            toast.success('Student successfully registered')
        }
    } catch (err)
    {
        toast.error('Student not registered !')
    }
}

// export const getStudentDetails = async() => {

//     try {
//         const response = await fetch('http://localhost:8089/api/v1/student/getAll', {
//             method: 'GET',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }) 
//         return response.json()  
//     } catch (err)
//     {
//         toast.error('Student details not available')
//     }
// }