import Employee from '../components/Employee';
import Employees from '../components/Employees';
import { useState } from 'react';

export default function AddSchedule(props) {
  const { employees } = props

  const [listEmployee, setListEmployee] = useState([])

  const addToListEmployee = (employee) => {
    const updatedListEmployee = [...listEmployee, employee]
    if(!listEmployee.includes(employee)) {
      setListEmployee(updatedListEmployee);
    }
  }
  const WeekDate = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const monday = new Date(today);
    const sunday = new Date(monday)
    if(currentDay > 1) {
      const gettingMonday = currentDay - 1;
      const gettingSunday = gettingMonday + 6;
      monday.setDate(monday.getDate() - gettingMonday);
      sunday.setDate(gettingSunday);
    }

    const currentMonth = today.getMonth();
    
    const mondayString = monday.toDateString();
    const sundayString = sunday.toDateString();
    
    // console.log('Today: ', today.toDateString());
    // console.log('Monday: ',monday.toDateString());
    // console.log('Sunday: ',sunday.toDateString());
    // console.log('Month: ',currentMonth);

    return (
      <h1>{mondayString} - {sundayString}</h1>
    )
  }

  return (
    <section className='add-schedule-section'>
      <section className='add-schedule-table-section'>
        <WeekDate />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thurday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            <Employee listEmployee={listEmployee} />
          </tbody>
        </table>
      </section>
      <section className='employee-list-section'>
        <a className='add-employee' href="/addEmployee">Add Employee</a>
        <Employees employees={employees} addToListEmployee={addToListEmployee} />
      </section>
    </section>
  )
}