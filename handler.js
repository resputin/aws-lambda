'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const { GraphQLServerLambda } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const config = require('./config');
// const Mutation = require('./resolvers/Mutation');

const start = async () => {
  const mongoClient = await mongoose.connect(config.MONGO_DB_URL);
};
start();
const resolvers = {
  Query
};

const lambda = new GraphQLServerLambda({
  typeDefs: './schema.graphql',
  resolvers,
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
