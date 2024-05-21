const {getProduct, getProducts } = require('./product.resolvers');

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getPerson: (_, args) => `Hello, Im ${args.name} and I'm ${args.age} years old.`,
        getInt: (_, args) => args.age,
        getFloat: () => 3.14,
        getString: () => 'Hello String!',
        getBoolean: () => true,
        getID: () => '1234567890',
        getNumbers: (_, args) => args.numbers,
        product: getProduct,
        products: getProducts
    }
};

module.exports = {resolvers};