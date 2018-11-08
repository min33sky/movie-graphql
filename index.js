import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

/**
 * GraphQL 설정
 */
const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers
});

server.start(() => console.log('Graphql Server Running'));
