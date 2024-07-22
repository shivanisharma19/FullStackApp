import { ToastContainer, toast } from 'react-toastify'


export const registerStudent = async( studentName: string, studentAddress: string, mobile:number ) => {

    try {
        const response : Response = await fetch('http://localhost:8089/api/v1/student/save', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({studentName, studentAddress, mobile})   
        })
        if(response.status === 200) {
            toast.success('Student successfully registered')
        }
    } catch (err)
    {
        toast.error('Student not registered !')
    }
}

export const getStudentDetails = async() : Promise<Object> => {

    try {
        const response : Response = await fetch('http://localhost:8089/api/v1/student/getAll', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (err)
    {
        toast.error('Student details not available')
        return 0 
    }
}