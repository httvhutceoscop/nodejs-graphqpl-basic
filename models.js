const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
} = require('graphql');

const todoModel = new GraphQLObjectType({
    name: 'todo',
    description: 'Todo entity',
    fields: {
        id: {
            type: GraphQLID,
            description: 'Todo id',
        },
        userId: {
            type: GraphQLInt,
            description: 'User ID',
        },
        title: {
            type: GraphQLString,
            description: 'Todo title',
        },
        completed: {
            type: GraphQLBoolean,
            description: 'Todo is completed or not',
        }
    },
});

const postModel = new GraphQLObjectType({
    name: 'post',
    description: 'Post entity',
    fields: {
        id: {
            type: GraphQLID,
            description: 'Post id',
        },
        userId: {
            type: GraphQLInt,
            description: 'User ID',
        },
        title: {
            type: GraphQLString,
            description: 'Post title',
        },
        body: {
            type: GraphQLBoolean,
            description: 'Post content',
        }
    },
});

const userCompanyModel = {
    name: 'userCompany',
    description: 'User company information',
    fields: {
        name: {
            type: GraphQLString,
            description: 'Company name',
        },
        catchPhrase: {
            type: GraphQLString,
            description: 'Company catch phrase',
        },
        bs: {
            type: GraphQLString,
            description: 'Company bs',
        },
    }
};

const userAddressModel = {
    name: 'userAddress',
    description: 'User company information',
    fields: {
        street: {
            type: GraphQLString,
            description: 'Address street',
        },
        city: {
            type: GraphQLString,
            description: 'Address city',
        },
        suite: {
            type: GraphQLString,
            description: 'Address suite',
        },
        zipcode: {
            type: GraphQLString,
            description: 'Address zipcode',
        },
        geo: {
            type: new GraphQLObjectType({
                name: 'userAddressGeo',
                description: 'User company information',
                fields: {
                    lat: {
                        type: GraphQLString,
                        description: 'User address latitude',
                    },
                    lng: {
                        type: GraphQLString,
                        description: 'User address longitude',
                    },
                }
            }),
        },
    }
};

const userModel = new GraphQLObjectType({
    name: 'user',
    description: 'Post entity',
    fields: {
        id: {
            type: GraphQLID,
            description: 'User id',
        },
        name: {
            type: GraphQLString,
            description: 'User name',
        },
        username: {
            type: GraphQLString,
            description: 'Username',
        },
        address: {
            type: new GraphQLObjectType(userAddressModel),
            description: 'User address',
        },
        phone: {
            type: GraphQLString,
            description: 'User phone',
        },
        website: {
            type: GraphQLString,
            description: 'User website',
        },
        company: {
            type: new GraphQLObjectType(userCompanyModel),
            description: 'User company',
        },
    },
})

module.exports = {
    todoModel,
    postModel,
    userModel,
};