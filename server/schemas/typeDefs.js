const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    name: String
    mobile: String
    events: [Event]
  }

  type Event {
    title: String
    date: String
    host: [User]
    performers: [User]
  }

  type Venue {
    _id: ID!
    name: String
    street: String
    city: String
    state: String
    zipcode: String
    phone: String
    email: String
    contact: [User]
    events: [Event]
  }

  input inputContact {
    firstName: String
    lastName: String
    street: String
    city: String
    state: String
    zipcode: Int
    phone1: String
    phone2: String
  }

  input inputProperty {
    nickname: String
    street: String
    city: String
    state: String
    zipcode: String
    rent: Int
    image: String
    due: String
  }

  input inputPayment {
    propertyId: String
    id: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    properties: [Property]
    property(propertyId: ID!): Property
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    payment(input: inputPayment): Property
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      landlord: Boolean!
    ): Auth
    login(email: String!, password: String!): Auth
    addProperty(input: inputProperty): Property
    addContact(input: inputContact): User
    addTenant(propertyId: ID!, username: String!): Property
    removeTenant(propertyId: ID!, userId: ID!): Property
    removeUser(userId: ID!, contactId: ID!, propertyId: ID!): User
    removeProperty(propertyId: ID!): Property
  }
`;

module.exports = typeDefs;
