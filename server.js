var express = require('express');
var {
    graphqlHTTP
} = require('express-graphql');

const schema = require('./src/schema');

const app = express();
const port = 8081

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);