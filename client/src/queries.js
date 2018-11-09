import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    movies(rating: 7, limit: 50) {
      id
      title
      rating
      description_intro
      genres
      language
      medium_cover_image
    }
  }
`;

// 아폴로에서만 작동하는 쿼리
export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
