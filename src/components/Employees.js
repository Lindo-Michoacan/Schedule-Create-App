export default function Employees(props){
  const { employees, addToListEmployee, addEmployeeDataToList } = props;
  const employeesInfo = employees.map(employee => {

    return (
        <li key={employee._id} onClick={() => {
          addToListEmployee(employee)

        }}>
          {employee.firstName} {employee.lastName}
        </li>
    );

  //   return (
  //     <li key={employee._id} onClick={() => addEmployeeDataToList(employee)}>
  //       {employee.firstName} {employee.lastName}
  //     </li>
  // )
  })

  return (
    <section className="employees-list-section">
      <h2>List of Employees</h2>
      <ul>
        {employeesInfo}
      </ul>
    </section>
  )
}