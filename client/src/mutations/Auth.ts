import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
    mutation register(
        $email: String!
        $password: String!
        $firstName: String!
        $surName: String!
        $gender: String!
        $dateOfBirth: DateTime!
    ) {
        register( inputs: {
            email: $email,
            password: $password
            firstName: $firstName,
            surName: $surName,
            gender: $gender,
            dateOfBirth: $dateOfBirth,
          }
        ){
          user {
            email
          }
        }
      }
`;

export const LOGIN_MUTATION = gql`
mutation login(
  $email: String!
  $password: String!
) {
    login( inputs: {
        email: $email,
        password: $password
      }
    ){
      email,
      token
    }
  }
`;


