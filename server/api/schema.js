const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar Date
  directive @auth on OBJECT

  type Item @auth {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    tags: [Tag]
    created: String
    borrower: User
  }

  type User @auth {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borrowed: [Item]
  }

  type Tag {
    id: ID
    title: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    description: String!
    tags: [AssignedTag]
    imageUrl: String
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  input SignupInput {
    fullname: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Mutation @auth {
    login(user: LoginInput!): AuthPayload!
    logout: Boolean!
    signup(user: SignupInput!): AuthPayload!
    addItem(item: NewItemInput): Item
  }
`;
