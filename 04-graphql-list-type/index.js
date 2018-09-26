'use strict';

const { graphql, buildSchema } = require('graphql');

/**
 * Just modify Query type to include the users field which is now a list of
 * users. Then, we add the resolver to our rootValue and add in some more dummy
 * users
 *
 * Now, update the query at the end to users. Note the similarity and the
 * differences between the query types
 */
const schema = buildSchema(`
type Video {
  id: ID,
  title: String!,
  duration: Int,
  watched: Boolean
}
type Query {
  video: Video
  videos: [Video]
}
type Schema {
  query: Query
}
`);

const videoA = {
  id: 'abc',
  title: 'Create a GraphQL Schema',
  duration: 120,
  watched: true,
};
const videoB = {
  id: 'def',
  title: 'Ember.js CLI',
  duration: 240,
  watched: false,
};
const videos = [videoA, videoB];

const resolvers = {
  video: () => videoA,
  videos: () => videos,
};

const query = `{
  videos {
    id,
    title,
    duration,
    watched
  }
}`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

