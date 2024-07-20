import React, { FormEventHandler, useEffect, useState } from 'react'
import './styles.css'
import { registerStudent } from './store.ts'

export const StudentForm = () => {
  const [students, setStudents] = useState()
  const [name, setName] = useState(String)
  const [add, setAdd] = useState(String)
  const [mobile, setMobile] = useState(String)

  useEffect(() => {
    //load student
    // setStudents()
  }) 


  const onRegister = async (e) => {
    e.preventDefault()
    await registerStudent(name, add, Number(mobile))
    setName('')
    setAdd('')
    setMobile('')
  }

    return ( 
    <><h1> Student Details </h1>
    <div className='form-wrapper'>
        <form>
          <label htmlFor='name'> Student Name </label><br />
          <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input><br /><br />
          <label htmlFor='address'> Address </label><br />
          <input type='text' id='address' name='address' value={add} onChange={(e) => setAdd(e.target.value)}></input><br /><br />
          <label htmlFor='mobile'> Mobile </label><br />
          <input type='text' id='mobile' name='mobile' minLength={10} maxLength={10} value={mobile} onChange={(e) => setMobile(e.target.value)}></input><br /><br />
          <button type='submit' onClick={onRegister}>Register</button>
        </form>
      </div></>)
}
