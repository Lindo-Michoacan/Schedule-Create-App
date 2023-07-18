import Employee from '../components/Employee';
import Employees from '../components/Employees';
import { useState, useEffect } from 'react';

export default function AddSchedule(props) {
  const { employees } = props

  const [listEmployee, setListEmployee] = useState([])
  const [schedule, setSchedule] = useState([]);

  const addToListEmployee = (employee) => {
    const updatedListEmployee = [...listEmployee, employee]
    if(!listEmployee.includes(employee)) {
      setListEmployee(updatedListEmployee);
      addEmployeeDataToList(employee)
    } else {
      console.log(`${employee.firstName} Its been added`)
    }
  }

  useEffect(() => {
    // localStorage.setItem(`schedule${employee.firstName}`, JSON.stringify(schedule))
    console.log('UseEffect: ',schedule)
  }, [schedule])

  const addEmployeeDataToList = (employee) => {
    const employeeData =
      {
        _id: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        week: []
      };

      const updatedEmployeeData = [...schedule, employeeData];
      if(!schedule.includes(employeeData)) {
        setSchedule(updatedEmployeeData);
        console.log('List Not Includes', employee.firstName)
      } else {
        console.log(`${employee.firstName} is included on the list`)
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
      // sunday.setDate(gettingSunday);
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
            <Employee listEmployee={listEmployee} schedule={schedule} setSchedule={setSchedule} />
          </tbody>
        </table>
      </section>
      <section className='employee-list-section'>
        <a className='add-employee' href="/addEmployee">Add Employee</a>
        <Employees employees={employees} addToListEmployee={addToListEmployee} addEmployeeDataToList={addEmployeeDataToList} />
      </section>
    </section>
  )
}