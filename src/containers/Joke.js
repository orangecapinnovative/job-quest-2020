import React from 'react'
import PropTypes from 'prop-types'
import { numericString } from 'airbnb-prop-types'
import { RedButton } from '../theme/RedButton'
import { CardWrapper, CardHeader, CardHeading2, CardBody, NavItem } from '../theme/CardWrapper'
import {
  withState,
  withHandlers,
  lifecycle,
  withProps,
  setPropTypes,
  compose
} from 'recompose'
const JokeContainer = ({
  id,
  value: { joke },
  backToPreviouUrl
}) => (
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
      <RedButton type="submit"
        onClick={backToPreviouUrl}>Back</RedButton>
    </div>
  )

export default compose(
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: numericString().isRequired
      }).isRequired
    }).isRequired,
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  }),
  withState('value', 'setJoke', { joke: '' }),
  withProps(props => ({ id: props.match.params.id })),
  withHandlers({
    loadJoke: ({ id, setJoke }) => _ => {

      fetch(`/jokes/${id}`)
        .then(res => res.json())
        .then(({ value }) => setJoke(value))
    },
    backToPreviouUrl: ({ history: { goBack } }) => _ => {
      goBack()
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadJoke()
    }
  })
)(JokeContainer)

