import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { SearchResultsForm } from '../components'
class JokesContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        categoryId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      pagination: {},
      jokes: []
    };
  }
  componentDidMount() {
    this.loadJokes()
  }
  componentDidUpdate(prevProps) {
    const { match, location } = this.props
    const { match: prevMatch, location: prevLocation } = prevProps
    if (
      (match.params.categoryId !== prevMatch.params.categoryId) ||
      (location.search !== prevLocation.search)
    ) {
      this.loadJokes()
    }
  }
  loadJokes() {
    const { location: { search }, match: { params } } = this.props
    const { categoryId } = params
    const page = new URLSearchParams(search).get('page') || 1
    fetch(`/jokes?exclude=[${categoryId}]&page=${page}`)
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
    const {  pagination: { page, totalPages } } = this.state
    const { categoryId } = this.props.match.params
    return (
      <div>
          <SearchResultsForm 
                 formType = 'Jokes'
                  {...this.state} />
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
  }
}
export default JokesContainer
