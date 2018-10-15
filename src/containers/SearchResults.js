import React, { Component } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { SearchResultsForm } from '../components'
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
    const { location } = this.props
    const { location: prevLocation } = prevProps
    if ((location.search !== prevLocation.search)) {
      this.loadJokes()
    }
  }
  loadJokes() {
    const { location: { search } } = this.props
    const firstName = new URLSearchParams(search).get('firstName')
    const lastName = new URLSearchParams(search).get('lastName')
    const page = new URLSearchParams(search).get('page') || 1
    fetch(`http://api.icndb.com/jokes/?firstName=${firstName}&lastName=${lastName}&page=${page}`)
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
  GetDataPaginate(sourceArray, page = 1, perPage = 30) {
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
    const { pagination: { page, totalPages } } = this.state
    const { location: { search } } = this.props
    const firstName = new URLSearchParams(search).get('firstName')
    const lastName = new URLSearchParams(search).get('lastName')
    return (
      <div>
        <SearchResultsForm  formType='SearchResults' {...this.state} />
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
  }
}
export default SearchResult