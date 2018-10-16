import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
// import { SearchResultsForm } from '../components'
import { NavList, NavItem } from '../theme/NavWrapper'
import {
  withProps,
  withState,
  withHandlers,
  compose,
  lifecycle
} from 'recompose'
const SearchResultContainer = ({
  jokes,
  name: { firstName, lastName },
  pagination: { totalPages, page }
}) => (
    <div>
      {/* <SearchResultsForm formType='SearchResults'
        {...jokes} /> */}
      <NavList>
        {
          jokes.map(({ id, joke }) => (
            <NavItem key={id} >
              {joke}
            </NavItem>
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
                    to={`/search?firstName=${firstName}&lastName=${lastName}&page=${currentIndex}`}
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
  withProps(props => ({ search: props.location.search })),
  withState('pagination', 'setPagination', {}),
  withState('jokes', 'setJokes', []),
  withState('name', 'setName', { firstName: '', lastName: '' }),
  withHandlers({
    loadJokes: ({
      setPagination,
      setJokes,
      setName,
      search
    }) => (perPage = 30) => {
      const firstName = new URLSearchParams(search).get('firstName')
      const lastName = new URLSearchParams(search).get('lastName')
      const page = new URLSearchParams(search).get('page') || 1
      fetch(`http://api.icndb.com/jokes/?firstName=${firstName}&lastName=${lastName}&page=${page}`)
        .then(res => res.json())
        .then(({ value }) => {
          //Start : create pagination
          let JokesList = value.slice((page - 1) * perPage, page * perPage)
          let meta = {
            page: +page,
            perPage: +perPage,
            totalPages: Math.ceil(value.length / perPage)
          }
          // End : create pagination
          setJokes(JokesList)
          setPagination(meta)
          setName({ firstName, lastName })
        })
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadJokes()
    },
    componentDidUpdate(prevProps) {
      const { location } = this.props
      const { location: prevLocation } = prevProps
      if ((location.search !== prevLocation.search)) {
        this.props.loadJokes()
      }
    }
  })

)(SearchResultContainer)
