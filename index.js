import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers
});

/**
 * todo
 * ! sadfsadfasdf
 * * asdflaskdfjalskdf
 * ? asldkfasdkfjaslkjfasldf
 */
server.start(() => console.log('Graphql Server Running'));
