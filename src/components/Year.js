import { useState } from 'react';
import { QUERY_YEARS, QUERY_YEAR } from '../utils/queries';
import { useQuery, useLazyQuery } from '@apollo/client';

export default function Year() {
  const getAllYears = useQuery(QUERY_YEARS);
  const [getYearData] = useLazyQuery(QUERY_YEAR, {
    onCompleted: (calendarData) => {
      console.log(calendarData)
    },
    onError: (errorData) => {
      console.log(errorData)
    }
  });
  const [calendar, setCalendar] = useState('')
  
  const years = getAllYears.data?.years || [];
  // const oneYear = getYearData.data?.year || [];



  const allYears = years.map(year => {

    const selectingYear = (yearDate) => {
      // console.log('Year Date:', yearDate.__typename)
      setCalendar(yearDate);
      console.log('Calendar', calendar);
      getYearData({ variables: {id: calendar._id}})
    };

    const months = (months) => {
      console.log(months);
      // setCalendar(`${months[0].monthName}`);
      // console.log(calendar)
    }
    // console.log('Year:', year.year);
    // console.log('Year Months:', year.months)
    return (
          <button onClick={() => selectingYear(year)} key={year._id}>{year.year}</button>
    )
  });

  return (
    <section>
      <h2>Year</h2>
      <ul>

        {allYears}
      </ul>
    </section>
  );
}