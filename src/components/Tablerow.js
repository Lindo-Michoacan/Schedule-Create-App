import Day from "./Day"

export default function Tablerow(props) {
  const { employee, schedule, setSchedule } = props

  const daysOfSchedule = Object.keys(employee.schedules)

  const weekSchedule = daysOfSchedule.map((day) => {
    // console.log('WeekSchedule:', day)
    return(
    <td key={`${employee.firstName}-${day}`}><Day employee={employee} day={day} schedule={schedule} setSchedule={setSchedule} /></td>)
  })

  return (
      <tr>
        <td>{employee.firstName}</td>
        {weekSchedule}
        {/* <td><Day employee={employee} day={'monday'} dayData={employee.schedules.monday} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'tuesday'}
        dayData={employee.schedules.tuesday} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'wednesday'} dayData={employee.schedules.wednesday} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'thursday'} dayData={employee.schedules.thursday} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'friday'} dayData={employee.schedules.friday} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'saturday'} dayData={employee.schedules.saturday} schedule={schedule} setSchedule={setSchedule} /></td>
        <td><Day employee={employee} day={'sunday'} dayData={employee.schedules.sunday} schedule={schedule} setSchedule={setSchedule} /></td> */}
        <td>Hours</td>

      </tr>

  )
}