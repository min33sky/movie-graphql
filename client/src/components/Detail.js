import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from '../queries';
import { Helmet } from 'react-helmet';
import Movie from './Movie';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10 20 rgba(0, 0, 0, 0.19) 0 6 6 rgba(0, 0, 0, 0.23);
  background: white;
  border-radius: 7px;
`;

const Image = Card.withComponent('img');

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.div`
  margin-bottom: 10px;
  display: block;
  font-weight: ${props => (props.bold ? '500' : '400')};
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin-top: 50px;
`;

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId: parseInt(movieId) }}>
    {({ loading, data, error }) => {
      if (loading) {
        return (
          <>
            <Helmet>
              <title>Loading | MovieQL</title>
            </Helmet>
          </>
        );
      }
      if (error) return 'error';
      return (
        <>
          <Container>
            <Helmet>
              <title>{data.movie.title} | MovieQL</title>
            </Helmet>
            <Image src={data.movie.medium_cover_image} />
            <span>
              <Title>{data.movie.title}</Title>
              <Paragraph bold>Rating: {data.movie.rating}⭐ </Paragraph>
              <Paragraph>{data.movie.description_intro}</Paragraph>
            </span>
          </Container>
          <Title>Suggested</Title>
          <MovieContainer>
            {data.suggestions.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.medium_cover_image}
              />
            ))}
          </MovieContainer>
        </>
      );
    }}
  </Query>
);

export default Detail;
