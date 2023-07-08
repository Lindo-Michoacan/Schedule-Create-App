export default function CurrentSchedule(props) {
  const { employees } = props

  const newEmployeeSchedule = employees.map(employee => {
    let fullName = `${employee.firstName} ${employee.lastName}`
    let mondaySchedule 
    if(!mondaySchedule === undefined) {
      mondaySchedule = `${employee.schedules[0].monday.beginningTime} - ${employee.schedules[0].monday.endingTime}`
      console.log('Monday Schedule:', mondaySchedule)
    }
    
    return (
      <tr key={employee._id}>
        <td>{fullName}</td>
        <td>{mondaySchedule}</td>
      </tr>
        )
        })

  return (
    <section>
      <ul>
        <a href="currentSchedule/year">Year</a>
      </ul>
    </section>
  );
  

  // return (
  //   <section className="current-schedule-section">
  //     <a href="/addEmployee">Add Employee</a>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Monday</th>
  //           <th>Tuesday</th>
  //           <th>Wednesday</th>
  //           <th>Thurday</th>
  //           <th>Friday</th>
  //           <th>Saturday</th>
  //           <th>Sunday</th>
  //         </tr>
  //       </thead>
  //           <tbody>
  //             {newEmployeeSchedule}
  //           </tbody>
  //     </table>
  //   </section>
  // )
}