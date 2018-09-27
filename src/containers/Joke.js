import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

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
        <Card body outline color="primary">
          <CardTitle>Joke title id : {id}</CardTitle>
          <CardText>{joke}</CardText>
          <Button
            color="primary"
            onClick={this.backToPreviouUrl}>Back</Button>
        </Card>
      </div>
    )
  }
}

export default JokeContainer
