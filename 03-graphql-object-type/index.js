'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
type Video {
  id: ID,
  title: String!,
  duration: Int,
  watched: Boolean
}
type Query {
  video: Video
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
  video: () => video,
};

const query = `{
  video {
    id,
    title,
    duration,
    watched
  }
}`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
