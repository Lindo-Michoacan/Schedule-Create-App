import { Routes, Route, NavLink} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react'
import Home from '../pages/Home';
import CurrentSchedule from '../pages/CurrentSchedule';
import AddSchedule from '../pages/AddSchedule';
import AddEmployee from '../pages/AddEmployee';
import Year from '../components/Year'
import { QUERY_YEARS, QUERY_EMPLOYEES } from '../utils/queries';

export default function NavBar() {

  const getAllEmployees = useQuery(QUERY_EMPLOYEES, {
    onCompleted: (employeesData) => {
      // console.log(employeesData);
    },
    onError: (errorData) => {
      console.log(errorData);
    }
  });
  const getAllYears = useQuery(QUERY_YEARS, {
    onCompleted: (yearsData) => {
      setDateData(yearsData);
    },
    onError: (errorData) => {
      console.log(errorData);
    }
  });
  // const [getYearData] = useLazyQuery(QUERY_YEAR, {
  //   onCompleted: (singleYearData) => {
  //     console.log(singleYearData)

  //     // setCurrentYearData(yearData);
  //   },
  //   onError: (errorData) => {
  //     console.log(errorData)
  //   }
  // });



  const employees = getAllEmployees.data?.employees || [];
  const years = getAllYears.data?.years || [];
  // const yearData  = getYearData.data?.year || [];
  

  const [newEmployee, setNewEmployee] = useState([]);
  const [dateData, setDateData] = useState([]);




  useEffect(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    for(let i = 0; i < years.length; i++) {
      if(years[i].year === currentYear) {
        setDateData(years[i]);
      }
      // if (dateData.__typename === 'Year') {
      //   getYearData({ variables: {id: dateData._id}});
      //   // console.log('Single Year: ', getYearData);
      //   setCurrentYearData()
      // }
    }
  }, [dateData]);



  // const checkingData = (dataYear) => {

  //   getYearData({ variables: {id: dateData._id}});
  //   console.log(currentYearData);
  //   const today = new Date();
  //   const currentYear = today.getFullYear();
  //   for(let i = 0; i < dataYear.length; i++) {
  //     if(dataYear.year === currentYear) {
  //       // setCurrentYearData(dataYear);
  
  //     };
  //   };
  // };

  return (
    <>
      <nav className="navbar">
        <NavLink to='' className='title'><h1>Lindo Michoacan</h1></NavLink>
        {/* <h2>{currentTime}</h2> */}
        <ul className='nav-list'>
          <NavLink to='' className='home'>Home</NavLink>
          <NavLink to='currentSchedule' className='currentSchedule' >Current Schedule</NavLink>
          <NavLink to='addSchedule' className='addSchedule' >Add Schedule</NavLink>
        </ul>
     </nav>
     <Routes>
        <Route path='' element={<Home />} />
        {/* <Route path='currentSchedule' element={<CurrentSchedule newEmployee={newEmployee} setNewEmployee={setNewEmployee} />} /> */}
        <Route path='currentSchedule' element={<CurrentSchedule employees={employees} />} />
        <Route path='addSchedule' element={<AddSchedule employees={employees} years={years} dateData={dateData} />} />
        <Route path='addEmployee' element={<AddEmployee newEmployee={newEmployee} setNewEmployee={setNewEmployee} />} />
        <Route path='currentSchedule/year' element={<Year years={years} />}/>
     </Routes>
     </>
  );
};