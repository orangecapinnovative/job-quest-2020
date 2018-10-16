import React, { Component } from 'react'
import PropTypes from 'prop-types'
const connect = (mapStateToProps, mapDispatchToProps) => Component => class extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    state = {
        subscription: null
    }
    componentDidMount() {
    
  
        const subscription = this.context.store.subscribe(
          () => this.forceUpdate()
        )
  
        this.props.setSubscription(() => subscription)
      }

    render() {
        const { store } = this.context
        const props = {
            ...mapStateToProps(store.getState(), this.props),
            ...mapDispatchToProps(store.dispatch, this.props)
        }

        return <Component {...this.props} {...props} />
    }
}
export default connect