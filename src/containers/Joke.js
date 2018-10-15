import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { CardWrapper, CardHeader, CardHeading2, CardBody, NavItem, NavLinkItem } from '../theme/CardWrapper'


class JokeContainer extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: numericString().isRequired
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      joke: ''
    };
  }
  componentDidMount() {
    this.loadJoke()
  }

  loadJoke() {
    const { id } = this.props.match.params

    fetch(`/jokes/${id}`)
      .then(res => res.json())
      .then(({ value }) => this.setState({ ...value }))
  }
  backToPreviouUrl = () => {
    this.props.history.goBack()
  }
  render() {
    const { id, joke } = this.state
    return (
      <div>
        <CardWrapper>
          <CardHeader>
            <CardHeading2>Joke title id : {id}</CardHeading2>
            <CardBody>
              <NavItem>
                  {joke}
              </NavItem>
            </CardBody>
          </CardHeader>
        </CardWrapper>
      </div>
    )
  }
}

export default JokeContainer
