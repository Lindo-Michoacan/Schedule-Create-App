import employeesData from "../data/employeesData";

export default function Employees(){
  const employeesInfo = employeesData.map(employee => {
    return (
      <ul className="employee-info">
        <li key={employee.id}>
          {employee.name}
        </li>
        <li>
          {employee.id}
        </li>
      </ul>
    )
  })

  return (
    <section className="employees-section">
      {employeesInfo}
    </section>
  )
}