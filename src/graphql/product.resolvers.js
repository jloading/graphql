const getProduct = (_, { id }) => {
    return {
        id,
        name: 'Product 1',
        price: 1000,
        description: 'This is a product',
        image: 'https://www.google.com',
        createdAt: new Date().toISOString()
    }
};

const getProducts = (_, args) => {
    return [];
};

module.exports = {getProduct, getProducts};