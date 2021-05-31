const {
    todoList,
    postsList,
    usersList,
} = require('./services');

const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql');

const queryType = new GraphQLObjectType({
    name: 'AllList',
    fields: {
        todo: todoList,
        users: usersList,
        posts: postsList,
    },
});

module.exports =  new GraphQLSchema({
    query: queryType,
});