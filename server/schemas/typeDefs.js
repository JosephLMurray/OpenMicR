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
    _id: ID!
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

  type Auth {
    token: ID!
    user: User
  }

  input inputVenue {
    
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    events: [Event]
    event(eventId: ID!): Event
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    venue(venueId: ID!): Venue
    venues: [Venue]
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      name: String!
      mobile: String
    ): Auth
    login(email: String!, password: String!): Auth
    addVenue(input: inputProperty): Property
    addContact(input: inputContact): User
    addTenant(propertyId: ID!, username: String!): Property
    removeTenant(propertyId: ID!, userId: ID!): Property
    removeUser(userId: ID!, contactId: ID!, propertyId: ID!): User
    removeProperty(propertyId: ID!): Property
  }
`;

module.exports = typeDefs;
