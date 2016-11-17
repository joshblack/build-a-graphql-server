'use strict';

const { graphql, buildSchema } = require('graphql');

/**
 * Basically build up a list of primitive types, start without using the non
 * null example and then add it in and comment out a resolver, and then fix it
 */
const schema = buildSchema(`
type Query {
  id: ID,
  title: String!,
  # Duration of the video (in seconds)
  duration: Int,
  watched: Boolean
}
type Schema {
  query: Query
}
`);

const video = {
  id: 'abc',
  title: 'Create a GraphQL Schema',
  duration: 120,
  watched: true,
};

const resolvers = {
  id: () => 'abc',
  title: () => 'GraphQL Fundamentals',
  duration: () => 120,
  watched: () => true,
};

const query = `{
  id,
  title,
  duration,
  watched
}`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
