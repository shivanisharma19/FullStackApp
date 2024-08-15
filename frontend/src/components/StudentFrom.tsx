import React, { FormEventHandler, useEffect, useState } from 'react'
import './styles.css'
import { registerStudent } from './slice.ts'
import { student } from '../common/interfaces.ts'

export const StudentForm = () => {
  const [students, setStudents] = useState()
  const [studentName, setName] = useState(String)
  const [studentAddress, setAdd] = useState(String)
  const [number, setMobile] = useState(String)

  const onRegister = async (e) => {
    e.preventDefault()
    const mobile = Number(number)
    await registerStudent({studentName, studentAddress, mobile})
    setName('')
    setAdd('')
    setMobile('')
  }

    return ( 
    <><h1> Student Details </h1>
    <div className='form-wrapper'>
        <form>
          <label htmlFor='name'> Student Name </label><br />
          <input type='text' id='name' name='name' value={studentName} onChange={(e) => setName(e.target.value)}></input><br /><br />
          <label htmlFor='address'> Address </label><br />
          <input type='text' id='address' name='address' value={studentAddress} onChange={(e) => setAdd(e.target.value)}></input><br /><br />
          <label htmlFor='mobile'> Mobile </label><br />
          <input type='umber' id='mobile' name='mobile' minLength={10} maxLength={10} value={number} onChange={(e) => setMobile(e.target.value)}></input><br /><br />
          <button type='submit' onClick={onRegister}>Register</button>
        </form>
      </div>
      </>)
}
