// Dependencia que crea un servidor
const { ApolloServer } = require('@apollo/server');

// Playground incluido en @apollo/server
const { ApolloServerPluginLandingPageLocalDefault } = require('@apollo/server/plugin/landingPage/default')

// Middleware de Express también en @apollo/server
const { expressMiddleware } = require('@apollo/server/express4');
const { get } = require('../routes/products.router');
const { loadFiles } = require('@graphql-tools/load-files');
const { resolvers } = require('./resolvers');

const useGraphQL = async (app) => {
    const server = new ApolloServer({
        typeDefs: await loadFiles('./src/**/*.graphql'),
        resolvers,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
    });
    await server.start();

    app.use(expressMiddleware(server,{
    context: async ({req}) => ({
      token: req.headers.token
    })
  }))
};

module.exports = useGraphQL;
