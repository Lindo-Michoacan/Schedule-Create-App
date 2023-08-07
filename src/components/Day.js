import { useState, useEffect } from 'react'

export default function Day(props) {
  const { employee, day, dayData, schedule, setSchedule } = props;

  // useEffect(() => {
  //   // console.log('Im hereee')
  //   for(let i = 0; i < schedule; i++) {
  //     // console.log('Loop useEffect' ,employee.schedules[i]);
  //     console.log(schedule[i].schedules.length)
  //   }
  // }, [schedule])

  const submitSchedule = (event) => {
    event.preventDefault();
    let beggingTime = document.querySelector(`#${employee.firstName}-${day}-beginning`).value;
    let endingTime = document.querySelector(`#${employee.firstName}-${day}-ending`).value;
    console.log(`On ${day} ${employee.firstName}: ${beggingTime} - ${endingTime}`);
    
  

    // const scheduleTime =
    //   {
    //     [`${day}`]:
    //       {
    //         beggingTime: `${beggingTime}`,
    //         endingTime: `${endingTime}`
    //       }
    //   };

      const scheduleTime = {
        beggingTime: `${beggingTime}`,
        endingTime: `${endingTime}`
      }

    for( let i = 0; i < Object.keys(employee.schedules).length; i++ ){
      let newData = [...schedule];
      // if(Object.keys(employee.schedules)[i] === day) {
        console.log('New Data: ',newData);
        // employee.schedules[i] = scheduleTime
        // for(let j = 0; j < newData.length; j++) {
        //   if(newData[j]._id === employee._id) {
        //     newData[j].schedules[i] = scheduleTime;
        //     setSchedule(newData);
        //   }
        // }

        // newData[i].schedules = [anotherDay ,scheduleTime]

        // console.log('New wEEK: ',newWeek);
        // if(Object.keys(schedule[i].schedules).length >= 1) {
        //   let anotherDay = schedule[i].schedules
        //   // let anotherDay = employee.schedules;
        //   setSchedule(prevState => ({
        //     schedules: {
        //       ...prevState.schedules,
        //       scheduleTime
        //     }
        //   }));
        //   console.log(newData);

        // } else {
          // newData[i].schedules = scheduleTime;
          // setSchedule(newData);
        //   console.log(newData)
        // }
      // }
    }


    // const updatedSchedule = [...schedule, scheduleTime];
    //   if(!schedule.includes(scheduleTime)) {
    //   setSchedule(updatedSchedule);
    //   };
  };

  function SettingScheduleTime() {
    if(dayData == null ) {
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
          <select>
            <option>Caja 1</option>
            <option>Caja 2</option>
            <option>Caja 3</option>
            <option>Caja 4</option>
            <option>Caja 5</option>
            <option>Caja 6</option>
            <option>Caja 7</option>
          </select>
          <input type="submit" onClick={submitSchedule}/>
        </form>
      );
    } else {
      // console.log('Runningggg bad', day);
      return (
        <>
        <h2>{dayData.beggingTime} - {dayData.endingTime}</h2>
        </>
      )
    }
  }

  return (
    <>
        <SettingScheduleTime />
    </>

  )
};