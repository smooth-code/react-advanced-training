import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { like, unlike } from '../redux/ActionCreators'
import MovieVote from './MovieVote'

const Container = styled('div')`
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url('${props => props.bgImg}');
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-position: center;
  background-size: 100%;
  height: 200px;
  color: white;
  position: relative;
  cursor: pointer;
  transition: background-size 300ms;

  &:hover {
    background-size: 140%;
  }
`

const InnerContainer = styled('div')`
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: opacity 500ms;

  &:hover {
    opacity: 1;
  }
`

const Title = styled('div')`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 8px;
`
const Vote = styled('div')`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

const Overview = styled('div')`
  font-size: 14px;
`

const Like = styled('div')`
  color: ${p => (p.active ? `red` : 'rgba(0, 0, 0, 0)')};
  font-size: 25px;
  position: absolute;
  right: 10px;
  text-shadow: 0px 0px #fff;
`

const MovieCard = ({ movie, liked, onClickLike }) => (
  <Container bgImg={`http://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}>
    <InnerContainer>
      <Title>{movie.title}</Title>
      <Vote>
        <MovieVote movie={movie} />
      </Vote>
      <Overview>{movie.overview}</Overview>
    </InnerContainer>
    <Like active={liked} onClick={onClickLike}>
      ❤️
    </Like>
  </Container>
)

export default connect(
  ({ movieLikes }, { movie }) => ({
    liked: movieLikes[movie.id],
  }),
  (dispatch, { movie }) => ({
    onLike: () => dispatch(like(movie.id)),
    onUnlike: () => dispatch(unlike(movie.id)),
  }),
  ({ liked }, { onLike, onUnlike }, ownProps) => ({
    onClickLike(event) {
      event.preventDefault()
      if (liked) onUnlike()
      else onLike()
    },
    liked,
    ...ownProps,
  }),
)(React.memo(MovieCard))
