import React, { FormEvent, FormEventHandler } from 'react'

export const StudentForm = () => {

    const onsubmit = (e : FormEvent) => {
        e.preventDefault()
    }
    return ( 
    <div className='form'>
    <form onSubmit={(e) => onsubmit(e)}>
      <label htmlFor='name'> Student Name: </label><br/>
      <input type='text' id='name' name='name'></input><br/><br/>
      <label htmlFor='address'> Address: </label><br/>
      <input type='text' id='address' name='address'></input><br/><br/>
      <label htmlFor='mobile'> Mobile: </label><br/>
      <input type='number' id='mobile' name='mobile' minLength={10} maxLength={10}></input><br/><br/>
      <button type='submit'>Register</button>
      <button type='submit'>Update</button>
    </form>
</div>)
}