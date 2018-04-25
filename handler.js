'use strict';
const { GraphQLServerLambda } = require('graphql-yoga');
const users = require('./db/users');

const typeDefs = `
  type Artist {
    id: ID!
    first_name: String
    last_name: String
  }
  type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }
  type Mutation {
    createArtist(
      first_name: String!
      last_name: String!
    ): Artist
    updateArtist(
      id: ID!
      first_name: String!
      last_name: String!
    ): Artist
    deleteArtist(
      id: ID!
    ): Artist
  }
`;

const resolvers = {
  Query: {
    artists: () => users.getUsers(),
    artist: (_, args) => users.getUser(args.id),
  },
  // Mutation: {
  //   createArtist: (_, args) => dbArtists.createArtist(args),
  //   updateArtist: (_, args) => dbArtists.updateArtist(args),
  //   deleteArtist: (_, args) => dbArtists.deleteArtist(args)
  // },
  // Artist: {
  //   songs: artist => dbSongs.getSongsByArtist(artist.id)
  // }
};

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
