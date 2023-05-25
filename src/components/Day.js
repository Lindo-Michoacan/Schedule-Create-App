import { useState, useEffect } from 'react'

export default function Day(props) {
  const { employee, day } = props;
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    localStorage.setItem(`schedule${employee.firstName}`, JSON.stringify(schedule))
  }, [schedule])

  const submitSchedule = (event) => {
    event.preventDefault();
    let beggingTime = document.querySelector(`#${employee.firstName}-${day}-beginning`).value;
    let endingTime = document.querySelector(`#${employee.firstName}-${day}-ending`).value;
    console.log(`On ${day} ${employee.firstName}: ${beggingTime} - ${endingTime}`);
    
    let scheduleTime = {
    [`${day}`]: [
        {
          day: `${day}`,
          beggingTime: `${beggingTime}`,
          endingTime: `${endingTime}`
        }
      ]
    }

    
    const updatedSchedule = [...schedule, scheduleTime];
      if(!schedule.includes(scheduleTime)) {
      setSchedule(updatedSchedule);

      };
    console.log('This is the schedule: ', schedule)
  }

  return (
    <form className={`${employee.firstName}-${day}-form`}>
      <select id={`${employee.firstName}-${day}-beginning`} className="beginning-time">
        <option value="7">07:00AM</option>
        <option value="8">08:00AM</option>
        <option value="9">09:00AM</option>
        <option value="10">10:00AM</option>
        <option value="11">11:00AM</option>
        <option value="12">12:00PM</option>
        <option value="13">01:00PM</option>
        <option value="14">02:00PM</option>
        <option value="15">03:00PM</option>
        <option value="16">04:00PM</option>
        <option value="17">05:00PM</option>
        <option value="18">06:00PM</option>
        <option value="19">07:00PM</option>
        <option value="20">08:00PM</option>
      </select>
      <select id={`${employee.firstName}-${day}-ending`} className="ending-time">
        <option value="7">07:00AM</option>
        <option value="8">08:00AM</option>
        <option value="9">09:00AM</option>
        <option value="10">10:00AM</option>
        <option value="11">11:00AM</option>
        <option value="12">12:00PM</option>
        <option value="13">01:00PM</option>
        <option value="14">02:00PM</option>
        <option value="15">03:00PM</option>
        <option value="16">04:00PM</option>
        <option value="17">05:00PM</option>
        <option value="18">06:00PM</option>
        <option value="19">07:00PM</option>
        <option value="20">08:00PM</option>
      </select>
      <input type="submit" onClick={submitSchedule}/>
    </form>
  );
};