const { gql } = require("apollo-server-express");

/**
 *  @TODO: Boomtown Schema
 *
 * Define the types in your GraphQL schema here.
 * For each type, remove the `_: Boolean` placeholder and add the
 * fields as directed. Be sure to finish writing resolvers for all types
 * and any relational fields, where required.
 *
 * We will create the custom Date scalar together.
 */
module.exports = gql`
  #scalar Date
  directive @auth on OBJECT | FIELD_DEFINITION

  type Item @auth {
    id: ID!
    title: String!
    imageurl: String!
    description: String!
    itemowner: User!
    tags: [Tag]
    created: String!
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
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    itemid: ID!
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

  type Mutation {
    login(user: LoginInput!): User!
    logout: Boolean!
    signup(user: SignupInput!): User!
    addItem(item: NewItemInput): Item
  }
`;