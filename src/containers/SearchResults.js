import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
      pagination: {},
      jokes: []
    }
  }
  componentDidMount() {
    this.loadJokes()
  }
  componentDidUpdate(prevProps) {
    const { match, location } = this.props
    const { match: prevMatch, location: prevLocation } = prevProps
    if (
      (match.params.firstName !== prevMatch.params.firstName) ||
      (match.params.lastName !== prevMatch.params.lastName) ||
      (location.search !== prevLocation.search)
    ) {
      this.loadJokes()
    }
  }
  loadJokes() {
    const { location: { search }, match: { params } } = this.props
    const { firstName, lastName } = params
    const page = new URLSearchParams(search).get('page') || 1
    fetch(`/jokes/?firstName=${firstName}&lastName=${lastName}&page=${page}`)
      .then(res => res.json())
      .then(({ value }) =>
        this.setState(
          { value },
          () => {
            const Jokes = this.GetDataPaginate(this.state.value, page)
            this.setState({ jokes: Jokes.jokes, pagination: Jokes.meta })
          }
        ))
  }
  GetDataPaginate(sourceArray, page = 1, perPage = 25) {
    let jokes = sourceArray.slice((page - 1) * perPage, page * perPage)
    return {
      jokes,
      meta: {
        page: +page,
        perPage: +perPage,
        totalPages: Math.ceil(sourceArray.length / perPage)
      }

    }
  }

  render() {
    const { jokes, pagination: { page, totalPages } } = this.state
    const { firstName, lastName } = this.props.match.params
    return (
      <div>
        <ul className='nav flex-column'>
          {jokes.map(({ id, joke }) => (
            <li key={id} className='list-group-item'>
              {joke}
            </li>
          ))}
        </ul>
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
                      to={`/jokes/Search/firstName=${firstName}&lastName=${lastName}?page=${currentIndex}`}
                      className='page-link'>{currentIndex}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
}
export default SearchResult