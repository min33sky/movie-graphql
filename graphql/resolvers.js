import { getMovies, getMovie, getSuggestions } from './db';

/**
 * Resolver
 * * 해당 쿼리에 대한 응답을 반환한다.
 *
 */
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
};

export default resolvers;
