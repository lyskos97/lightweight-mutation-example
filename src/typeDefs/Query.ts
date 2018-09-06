export default `
  type Query {
    allPosts: [Post!]
    getPostById(id: String!): Post

    allUsers: [User!]
    getUserById(id: String!): User
  }
`;
