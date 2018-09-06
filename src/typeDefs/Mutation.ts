export default `
  type Mutation {
    createPost(record: CreatePostInput!): CreatePostPayload
    createUser(record: CreateUserInput!): CreateUserPayload
  }
`;
