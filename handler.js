'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const { GraphQLServerLambda } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const config = require('./config');
const Mutation = require('./resolvers/Mutation');
console.log('1');
async function start() {
  console.log(config.MONGO_DB_URL);
  const mongoClient = await mongoose.connect(config.MONGO_DB_URL);
  console.log('2')
  mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
  }); 
  return true;
};
start();
console.log('3');
const resolvers = {
  Query, Mutation
};

const lambda = new GraphQLServerLambda({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({ ...req })
});

exports.playground = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await start() 
  return lambda.playgroundHandler(event, context, callback);
}
exports.server = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  await start() 
  return lambda.graphqlHandler(event, context, callback)
}
console.log('4');
