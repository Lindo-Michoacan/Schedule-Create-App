import { Routes, Route, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from '../pages/Home';
import CurrentSchedule from '../pages/CurrentSchedule';
import AddSchedule from '../pages/AddSchedule';
import AddEmployee from '../pages/AddEmployee';

export default function NavBar() {
  const [newEmployee, setNewEmployee] = useState([]);
  // setNewEmployee(currentEmployees);
  useEffect(() => {
    localStorage.setItem('employee', JSON.stringify(newEmployee))
  }, [newEmployee])
  let currentTime = new Date().toTimeString()
  // console.log(currentTime)
  return (
    <>

      <nav className="navbar">
        <NavLink to='' className='title'><h1>Lindo Michoacan</h1></NavLink>
        {/* <h2>{currentTime}</h2> */}
        <ul className='nav-list'>
          <NavLink to='' className='home'>Home</NavLink>
          <NavLink to='currentSchedule' className='currentSchedule' >Current Schedule</NavLink>
          <NavLink to='addSchedule' className='addSchedule'>Add Schedule</NavLink>
        </ul>
     </nav>
     <Routes>
        <Route path='' element={<Home />} />
        <Route path='currentSchedule' element={<CurrentSchedule newEmployee={newEmployee} setNewEmployee={setNewEmployee} />} />
        <Route path='addSchedule' element={<AddSchedule newEmployee={newEmployee} setNewEmployee={setNewEmployee} />} />
        <Route path='addEmployee' element={<AddEmployee newEmployee={newEmployee} setNewEmployee={setNewEmployee} />} />
     </Routes>
     </>
  );
};