import Tablerow from "./Tablerow"

export default function Employee(props) {
  const { employees } = props

  const employeeSchedule = () => {
    employees.map(employee => <Tablerow key={employee.id} employee={employee} />)}
  return (
    <>
      {/* {employeeSchedule} */}
    </>
  )
}