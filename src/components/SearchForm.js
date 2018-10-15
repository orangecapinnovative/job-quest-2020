import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormRow, FormColumn, Label } from '../theme/Form'
import { RedButton } from '../theme/RedButton'
import {  InputWithoutBorder } from '../theme/Input'

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
            <div >
                <Form>
                    <FormRow>
                        <FormColumn >
                            <Label htmlFor='searchFirstName' >First Name:</Label>
                            <InputWithoutBorder
                                type='text'
                                className='form-control'
                                id='searchFirstName'
                                name='searchFirstName'
                                value={searchFirstName}
                                onChange={this.onFieldChange}
                                placeholder='Enter first name' />{' '}
                        </FormColumn>
                        <FormColumn>
                            <Label htmlFor='searchLastName'>Last Name: </Label>
                            <InputWithoutBorder
                                type='text'
                                className='form-control'
                                id='searchLastName'
                                name='searchLastName'
                                value={searchLastName}
                                onChange={this.onFieldChange}
                                placeholder='Enter last name' />{' '}
                        </FormColumn>
                        <FormColumn >
                            <RedButton type="submit"
                                onClick={this.onSubmit}>Search</RedButton>
                        </FormColumn>
                    </FormRow>
                </Form>
                <hr />
            </div >
        )
    }
}
export default SearchForm