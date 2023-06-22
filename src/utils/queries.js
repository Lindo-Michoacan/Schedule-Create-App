import { gql } from '@apollo/client'

export const QUERY_YEARS = gql`
  query getYears {
    years {
      _id
      year
      months {
        _id
        monthName
        monthNumber
      }
    }
  }
`;

export const QUERY_YEAR = gql`
query Years($id: ID!) {
  year(_id: $id) {
    _id
    year
    months {
      _id
      monthName
      monthNumber
    }
  }
}
`;

export const QUERY_EMPLOYEES = gql`
  query getEmployees {
    employees {
      _id
      firstName
      lastName
      schedules {
        _id
        monday {
          cashRegister
          beginningTime
          endingTime
        }
      }
    }
  }
`

export const QUERY_EMPLOYEE = gql`
{
  employee {
    _id
    firstName
    lastName
    schedules {
      _id
      scheduleDate
      monday {
        cashRegister
        beginningTime
        endingTime
      }
      tuesday {
        cashRegister
        beginningTime
        endingTime
      }
      wednesday {
        cashRegister
        beginningTime
        endingTime
      }
      thursday {
        cashRegister
        beginningTime
        endingTime
      }
      friday {
        cashRegister
        beginningTime
        endingTime
      }
      saturday {
        cashRegister
        beginningTime
        endingTime
      }
      sunday {
        cashRegister
        beginningTime
        endingTime
      }
      totalHours
    }
  }
}
`