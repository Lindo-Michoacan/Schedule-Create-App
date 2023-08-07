import Tablerow from "./Tablerow"

export default function Employee(props) {
  const { listEmployee, schedule, setSchedule } = props



  // const employeeSchedule = listEmployee.map(employee =>
  //   <Tablerow key={employee._id} employee={employee} schedule={schedule} setSchedule={setSchedule} />
  // );

  const employeeSchedule = schedule.map(employee =>{
    // console.log(employee)
    return (
    <Tablerow key={employee._id} employee={employee} schedule={schedule} setSchedule={setSchedule} />
    )
  }
    ); 
  return (
    <>
      {employeeSchedule}
    </>
  )
}