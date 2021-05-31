const {
    GraphQLList,
} = require('graphql');
const axios = require('axios');
const {
    todoModel,
    postModel,
    userModel,
} = require('./models');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const baseRequest = (url) => {
    console.log('URL: ', url)
    return axios
        .get(url)
        .then(res => {
            console.log('res.json', res.data)
            return res.data
        });
}

const getTodo = () => {
    const url = `${BASE_URL}/todos`;
    return baseRequest(url);
};

const getPosts = () => {
    const url = `${BASE_URL}/posts`;
    return baseRequest(url);
}

const getUsers = () => {
    const url = `${BASE_URL}/users`;
    return baseRequest(url);
}

const todoList = {
    type: new GraphQLList(todoModel),
    resolve: getTodo,
}

const postsList = {
    type: new GraphQLList(postModel),
    resolve: getPosts,
}

const usersList = {
    type: new GraphQLList(userModel),
    resolve: getUsers,
}

module.exports = {
    todoList,
    postsList,
    usersList,
};