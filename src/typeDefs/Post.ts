export default `
  type Post {
    _id: String!
    text: String!
    author: User!
  }

  input CreatePostInput {
    text: String!
    authorId: String!
  }

  type CreatePostPayload {
    recordId: String!
    record: Post!
  }
`;
