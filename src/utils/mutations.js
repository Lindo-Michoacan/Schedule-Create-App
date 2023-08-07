import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
mutation AddEmployee($firstName: String!, $lastName: String!) {
  addEmployee(firstName: $firstName, lastName: $lastName) {
    _id
    firstName
    lastName
  }
}
`;

export const ADD_YEAR = gql`
  mutation AddYear($year: Int!) {
    addYear(year: $year) {
      _id
      year
    }
  } 
`;

export const ADD_MONTH = gql`
  mutation AddMonth($monthName: String!, $monthNumber: Int!, $yearId: ID!) {
    addMonth(monthName: $monthName, monthNumber: $monthNumber, yearId: $yearId) {
      _id
      monthName
      monthNumber
  }
}
`;

// export const ADD_WEEK = gql`
// `;

export const ADD_SCHEDULE = gql`
  mutation addSchedule($employeeId: ID!, $scheduleDate: String!, $mondayCashRegister: Int, $mondayBeginningTime: Int, $mondayEndingTime: Int, $tuesdayCashRegister: Int, $tuesdayBeginningTime: Int, $tuesdayEndingTime: Int) {
    addSchedule(employeeId: $employeeId, scheduleDate: $scheduleDate, mondayCashRegister: $mondayCashRegister, mondayBeginningTime: $mondayBeginningTime, mondayEndingTime: $mondayEndingTime, tuesdayCashRegister: $tuesdayCashRegister, tuesdayBeginningTime: $tuesdayBeginningTime, tuesdayEndingTime: $tuesdayEndingTime) {
      _id
      scheduleDate
      monday {
        mondayCashRegister
        mondayBeginningTime
        mondayEndingTime
      }
      tuesday {
        tuesdayCashRegister
        tuesdayBeginningTime
        tuesdayEndingTime
      }
    }
  }
`;