import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';

export default function AddEmployee(props) {
  // const {  } = props
  const addNewEmployee = () => {
    console.log('1')
  }

  return (
    <form>
      <label>First Name</label>
      <input type='text' className='first-name-input'/>
      <label>Last Name</label>
      <input type='text' className='last-name-input'/>
      {/* <label>Phone Number</label>
      <input type='text' /> */}
      <input type='submit' value='submit' onClick={addNewEmployee}/>
    </form>
  );
};