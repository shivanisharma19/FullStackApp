import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import '../compoenents/styles.css'

export const StudentForm = () => {
  const [students, setStudents] = useState()
  const [name, setName] = useState(String)
  const [add, setAdd] = useState(String)
  const [mobile, setMobile] = useState(String)

  useEffect(() => {
    //load student
    // setStudents()
  }) 


    const onSave : FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return ( 
    <><h1> Student Details </h1>
    <div className='form-wrapper'>
        <form onSubmit={onSave}>
          <label htmlFor='name'> Student Name </label><br />
          <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input><br /><br />
          <label htmlFor='address'> Address </label><br />
          <input type='text' id='address' name='address' value={add} onChange={(e) => setAdd(e.target.value)}></input><br /><br />
          <label htmlFor='mobile'> Mobile </label><br />
          <input type='text' id='mobile' name='mobile' minLength={10} maxLength={10} value={mobile} onChange={(e) => setMobile(e.target.value)}></input><br /><br />
          <button type='button'>Register</button>
          <button type='button'>Update</button>
        </form>
      </div></>)
}