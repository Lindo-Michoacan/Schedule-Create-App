import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
mutation AddEmployee($firstName: String!, $lastName: String!) {
  addEmployee(firstName: $firstName, lastName: $lastName) {
    _id
    firstName
    lastName
  }
}
`