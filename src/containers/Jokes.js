import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { NavList, NavLinkItem } from '../theme/NavWrapper'
import {
  setPropTypes,
  withProps,
  withState,
  withHandlers,
  compose,
  lifecycle
} from 'recompose'

const JokesContainer = ({
  categoryId,
  jokes,
  pagination: { totalPages, page }
}) => (
    <div>
      <NavList>
        {
          jokes.map(({ id, joke }) => (
            <NavLinkItem key={id}
              to={`/jokes/${id}`} >
              {joke}
            </NavLinkItem>
          )
          )
        }
      </NavList>
      <br />
      <nav>
        <ul className='pagination'>
          {
            Array.from({ length: totalPages }).map((_, index) => {
              const currentIndex = index + 1
              return (
                <li
                  key={currentIndex}
                  className={classNames(['page-item', { active: currentIndex === +page }])}>
                  <Link
                    to={`/categories/${categoryId}/jokes?page=${currentIndex}`}
                    className='page-link'>{currentIndex}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
export default compose(
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired
  }),
  withProps(props => ({ categoryId: props.match.params.categoryId })),
  withState('pagination', 'setPagination', {}),
  withState('jokes', 'setJokes', []),
  withHandlers({
    loadJokes: ({
      setPagination,
      setJokes,
      location: { search },
      categoryId
    }) => (perPage = 30) => {
      const page = new URLSearchParams(search).get('page') || 1
      fetch(`/jokes?exclude=[${categoryId}]&page=${page}`)
        .then(res => res.json())
        .then(({ value }) => {
          //create pagination
          let JokesList = value.slice((page - 1) * perPage, page * perPage)
          let meta = {
            page: +page,
            perPage: +perPage,
            totalPages: Math.ceil(value.length / perPage)
          }
          //
          setJokes(JokesList)
          setPagination(meta)
        })
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadJokes()
    },
    componentDidUpdate(prevProps) {
      const { match, location } = this.props
      const { match: prevMatch, location: prevLocation } = prevProps
      if (
        (match.params.categoryId !== prevMatch.params.categoryId) ||
        (location.search !== prevLocation.search)
      ) {
        this.props.loadJokes()
      }
    }
  })
)(JokesContainer)
