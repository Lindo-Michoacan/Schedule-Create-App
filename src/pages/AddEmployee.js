import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';

export default function AddEmployee(props) {
  // const {  } = props
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: ''
  });

  const [addNewEmployee] = useMutation(ADD_EMPLOYEE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value})
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addNewEmployee({
        variables: { ...employeeData }
      })
    } catch(error) {
      console.log(error)
    }

    setEmployeeData({
      firstName: '',
      lastName: ''
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>First Name</label>
      <input type='text' className='first-name-input' onChange={handleInputChange} name='firstName' value={employeeData.firstName}/>
      <label>Last Name</label>
      <input type='text' className='last-name-input' onChange={handleInputChange} name='lastName' value={employeeData.lastName}/>
      {/* <label>Phone Number</label>
      <input type='text' /> */}
      <button type='submit' value='submit'>Submit</button>
    </form>
  );
};