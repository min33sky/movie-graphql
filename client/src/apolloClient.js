import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://movie-gql.herokuapp.com/'
});

export default client;
