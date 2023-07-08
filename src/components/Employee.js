import Tablerow from "./Tablerow"

export default function Employee(props) {
  const { listEmployee } = props

  const employeeSchedule = listEmployee.map(employee =>
    <Tablerow key={employee._id} employee={employee} />
  )
  return (
    <>
      {employeeSchedule}
    </>
  )
}