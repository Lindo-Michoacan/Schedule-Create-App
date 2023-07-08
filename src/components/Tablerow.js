import Day from "./Day"

export default function Tablerow(props) {
  const { employee } = props

  return (
      <tr>
        <td>{employee.firstName}</td>
        <td><Day employee={employee} day={'monday'} /></td>
        <td><Day employee={employee} day={'tuesday'} /></td>
        <td><Day employee={employee} day={'wednesday'} /></td>
        <td><Day employee={employee} day={'thursday'} /></td>
        <td><Day employee={employee} day={'friday'} /></td>
        <td><Day employee={employee} day={'saturday'} /></td>
        <td><Day employee={employee} day={'sunday'} /></td>
        <td>Hours</td>

      </tr>

  )
}