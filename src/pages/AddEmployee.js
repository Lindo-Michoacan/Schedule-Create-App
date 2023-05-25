import { useEffect } from 'react'

export default function AddEmployee(props) {
  const { newEmployee, setNewEmployee } = props
  let idCount = 0

  // useEffect(() => {
  //   localStorage.setItem('employee', JSON.stringify(newEmployee))
  // }, [newEmployee])

  const addNewEmployee = (event, employee) => {
    event.preventDefault()
    let firstName = document.querySelector('.first-name-input').value;
    let lastName = document.querySelector('.last-name-input').value;
    console.log(`${firstName} ${lastName}`);
    idCount++
    console.log(idCount)
    let addEmployee = {
      id: idCount,
      firstName: firstName,
      lastName: lastName
    }
    const updatedEmployees = [...newEmployee, addEmployee];
    if(!newEmployee.includes(addEmployee)) {
      setNewEmployee(updatedEmployees);

    };

  };
  console.log(newEmployee)
  return (
    <form>
      <label>First Name</label>
      <input type='text' className='first-name-input'/>
      <label>Last Name</label>
      <input type='text' className='last-name-input'/>
      <label>Phone Number</label>
      <input type='text' />
      <input type='submit' value='submit' onClick={addNewEmployee}/>
    </form>
  );
};