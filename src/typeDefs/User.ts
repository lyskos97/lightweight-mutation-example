export default `
  type User {
    _id: String!
    name: String!
    posts: [Post!]
  }

  input CreateUserInput {
    name: String
  }

  type CreateUserPayload {
    recordId: String!
    record: User!
  }
`;
