import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String!
    $lastName: String!
  ) {
    addEmployee(
      firstName: $firstName
      lastName: $lastName
    ) {
      _id
      firstName
      lastName
      schedule
    }
  }
`