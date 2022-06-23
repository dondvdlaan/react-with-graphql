// Constants and variables
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const server = express();
const port = 4000;
const cors = require('cors');

//This is CORS-enabled for all origins
server.use(cors());

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    name: String
  }
  
`);

// The root provides a resolver function for each API endpoint
const root = {
  name: () => {
    return 'No name';
  },
};



//Middleware
server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Starting server
server.listen(
    port,
    err => console.log(err || `GraphQL API server at http://localhost:${port}/graphql`));
