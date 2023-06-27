import { useState, useEffect } from 'react';
import { QUERY_YEARS, QUERY_YEAR } from '../utils/queries';
import { useQuery, useLazyQuery } from '@apollo/client';

export default function Year() {
  const getAllYears = useQuery(QUERY_YEARS, {
    onCompleted: (yearData) => {
      console.log(yearData);
    },
    onError: (errorData) => {
      console.log(errorData);
    }
  });
  const [getYearData] = useLazyQuery(QUERY_YEAR, {
    onCompleted: (calendarData) => {
      console.log(calendarData)
    },
    onError: (errorData) => {
      console.log(errorData)
    }
  });
  const [calendar, setCalendar] = useState('');

  useEffect(()=> {
    if(calendar.__typename === null || calendar === '') {
      console.log('UseEffect:', calendar)
    } else if (calendar.__typename === 'Year') {
      console.log('Else If useEffect Year: ', calendar);
      getYearData({ variables: {id: calendar._id}})
    } else {
      console.log('Else useEffect: ', calendar);
    }

  }, [calendar]);
  
  const years = getAllYears.data?.years || [];;
  // const months = calendar.months

  const selectingYear = (yearDate) => {
    // console.log('Year Date:', yearDate.__typename)
    setCalendar(yearDate);
    console.log('Calendar', calendar);
    // getYearData({ variables: {id: calendar._id}})
  };


  function WholeCalendar() {
      if(calendar.__typename === 'Year') {
        const allMonths = calendar.months.map(month => {
          return (
            <button key={month._id}>{month.monthName}</button>
          )
        })

        return (
          <>
            {allMonths}
          </>
        )

      } else if(calendar.__typename === 'Month') {
        return (
          <h1>Month</h1>
        )
      } else {
        const allYears = years.map(year => {
          // console.log('Year:', year.year);
          // console.log('Year Months:', year.months)
          return (
                <button onClick={() => selectingYear(year)} key={year._id}>{year.year}</button>
          )
        });
        
        return (
          <>
          {allYears}
          </>
        )
      }
      // } else if (calendar.__typename === 'Month') {
      //   return (
      //     <h2>months</h2>
      //   )
      // }
  }


 

  // const allMonths = () => {
  //   // console.log(month);
  //   // setCalendar(`${months[0].monthName}`);
  //   // console.log(calendar)

  // }

  return (
    <section>
      <ul>
        <WholeCalendar />
      </ul>
    </section>
  );
}