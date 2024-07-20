import { toast } from 'react-toastify'


export const registerStudent = async( studentName: string, studentAddress: string, mobile:number ) => {

    try {
        const student = await fetch('http://localhost:8089/api/v1/student/save', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({studentName, studentAddress, mobile})
            
        })
        toast.success('Student successfully registered ')
    } catch (err)
    {
        toast.error('Student not registered !')
    }

}