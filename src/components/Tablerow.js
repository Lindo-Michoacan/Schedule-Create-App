import Day from "./Day"

export default function Tablerow(props) {
  const { employee, schedule, setSchedule } = props

  return (
      <tr>
        <td>{employee.firstName}</td>
        <td><Day employee={employee} day={'monday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'tuesday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'wednesday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'thursday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'friday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'saturday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'sunday'} schedule={schedule} setSchedule={setSchedule} /></td>
        <td>Hours</td>

      </tr>

  )
}