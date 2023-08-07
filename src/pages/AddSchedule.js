import Employee from '../components/Employee';
import Employees from '../components/Employees';
import { useState, useEffect } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_YEAR } from '../utils/queries';
import { ADD_MONTH } from '../utils/mutations';


export default function AddSchedule(props) {

  const [currentYearData, setCurrentYearData] = useState([]);
  const [currentMonthData, setCurrentMonthData] = useState([]);
  const [monthData, setMonthData] = useState({
    monthName: '',
    monthNumber: 0,
    yearId: ''
  });
  const [weekData, setWeekData] = useState({
    employeeId: '',
    scheduleDate: '',
    monday: {
      mondayCashRegister: 0,
      mondayBeginnigTime: 0,
      mondayEndingTime: 0
    },
    // tuesday: {
    //   tuesdayCashRegister: 0,
    //   tuesdayBeginnigTime: 0,
    //   tuesdayEndingTime: 0
    // },
    // wednesday: {
    //   cashRegister: 0,
    //   beginnigTime: 0,
    //   endingTime: 0
    // },
    // thursday: {
    //   cashRegister: 0,
    //   beginnigTime: 0,
    //   endingTime: 0
    // },
    // friday: {
    //   cashRegister: 0,
    //   beginnigTime: 0,
    //   endingTime: 0
    // },
    // saturday: {
    //   cashRegister: 0,
    //   beginnigTime: 0,
    //   endingTime: 0
    // },
    // sunday: {
    //   cashRegister: 0,
    //   beginnigTime: 0,
    //   endingTime: 0
    // },
    // totalHour: 0,
  })

  const [getYearData] = useLazyQuery(QUERY_YEAR, {
    onCompleted: (singleYearData) => {
      console.log(singleYearData);
      setCurrentYearData(singleYearData)
    },
    onError: (errorData) => {
      console.log(errorData)
    }
  });

  const [addNewMonth] = useMutation(ADD_MONTH);

  const { employees, dateData } = props;

  const [listEmployee, setListEmployee] = useState([])
  const [schedule, setSchedule] = useState([]);
  const [scheduleDate, setScheduleDate] = useState('');


  useEffect(() => {
    // const today = new Date();
    // const currentYear = today.getFullYear();
    // if(yearData.year === currentYear) {
      console.log('Current Year:', currentYearData)

  }, [currentYearData]);

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth();
    if(currentMonth + 1 === monthData.monthNumber) {
      console.log('We have data', monthData);
      addNewMonth({
        variables: { ...monthData }
      })
    } else {
      console.log('No Data', monthData)
    }

  },[monthData]);

  useEffect(()=> {
    const today = new Date();
    const currentDay = today.getDay();
    const monday = new Date(today);
    const sunday = new Date(today);
    if(currentDay >= 1) {
      const gettingMonday = currentDay - 1;
      monday.setDate(monday.getDate() - gettingMonday);
      sunday.setDate(monday.getDate() + 6);
    };
    const mondayString = monday.toDateString();
    const sundayString = sunday.toDateString();
    const weekString = `${mondayString} - ${sundayString}`;
    setScheduleDate(weekString);
  }, [scheduleDate]);

  const addToListEmployee = (employee) => {
    const updatedListEmployee = [...listEmployee, employee]
    if(!listEmployee.includes(employee)) {
      setListEmployee(updatedListEmployee);
      addEmployeeDataToList(employee);

      if (dateData.__typename === 'Year') {
        getYearData({ variables: {id: dateData._id}});
        const today = new Date();
        const currentMonth = today.getMonth();
        // setCurrentYearData();
        for(let i = 0; i < Object.keys(dateData.months).length; i++) {
          
          if(!dateData.months[i].monthNumber === currentMonth + 1) {
            const allMonthsList = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            setMonthData({
              monthName: allMonthsList[currentMonth],
              monthNumber: currentMonth + 1,
              yearId: dateData._id
            });
          }
          console.log('hereeee' , dateData.months[i])
        }
      }
      console.log('Employee Schedule', employee.schedules)
    }

  };

  useEffect(() => {
    // localStorage.setItem(`schedule${employee.firstName}`, JSON.stringify(schedule))
    // for(let i = 0; i < schedule.length; i++) {
    //   console.log(Object.keys(schedule[i].schedules).length)
    // }
    console.log('Schedule was changed');
  }, [schedule]);


  const addEmployeeDataToList = (employee) => {
    const employeeData =
      {
        _id: employee._id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        schedules: 
          {
            monday: {},
            tuesday: {},
            wednesday: {},
            thursday: {},
            friday: {},
            saturday:{},
            sunday: {}
          }
      };

      const updatedEmployeeData = [...schedule, employeeData];
      if(!schedule.includes(employeeData)) {
        setSchedule(updatedEmployeeData);
      }
  }

  const backEntitie = '<';
  const forwardEntitie = '>';

  return (
    <section className='add-schedule-section'>
      {/* <CheckingSchedule /> */}
      <section className='add-schedule-table-section'>
        <nav>
          <button>{backEntitie}</button>
          <h1>{scheduleDate}</h1>
          <button>{forwardEntitie}</button>
        </nav>
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