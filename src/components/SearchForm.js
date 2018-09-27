import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFirstName: '',
            searchLastName: ''
        };
    }
    static propTypes = {
        searchFirstName: PropTypes.string.isRequired,
        searchLastName: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    onFieldChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { searchFirstName, searchLastName } = this.state
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor='searchFirstName'>First Name: </label>
                        <input
                            type='text'
                            className='form-control'
                            id='searchFirstName'
                            name='searchFirstName'
                            value={searchFirstName}
                            onChange={this.onFieldChange}
                            placeholder='Enter first name' />{' '}
                    </div>
                    <div className="form-group mx-sm-4  mb-2">
                        <label htmlFor='searchLastName'>Last Name: </label>
                        <input
                            type='text'
                            className='form-control'
                            id='searchLastName'
                            name='searchLastName'
                            value={searchLastName}
                            onChange={this.onFieldChange}
                            placeholder='Enter last name' />{' '}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary mb-1"
                        onClick={this.onSubmit}> Search  </button>
                </form>
                <hr />
            </div >
        )
    }
}
export default SearchForm