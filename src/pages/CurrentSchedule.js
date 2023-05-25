export default function CurrentSchedule(props) {
  // const [allHours, setAllHours] = useState([]);
  // useEffect(() => {
  //   const
  // });
  const { newEmployee, setNewEmployee } = props


  let currentEmployees = JSON.parse(localStorage.getItem('employee'))

  // setNewEmployee(currentEmployees)
  console.log('Current Employees', currentEmployees);

  const newEmployeeSchedule = currentEmployees.map(employee => {
        // let employeeSchedule = JSON.parse(localStorage.getItem(`schedule${employee.firstName}`))
        // let mondaySchedule = `${employeeKeyName.beggingTime}:00 - ${employeeKeyName.endingTime}:00`;
        return (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            {/* <td>{mondaySchedule}</td> */}
          </tr>
        )
        })

  

  return (
    <section className="current-schedule-section">
      <a href="/addEmployee">Add Employee</a>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thurday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
            <tbody>
              {newEmployeeSchedule}
            </tbody>
      </table>
    </section>
  )
}