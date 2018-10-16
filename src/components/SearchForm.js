import React from 'react'
import PropTypes from 'prop-types'
import { Form, FormRow, FormColumn, Label } from '../theme/Form'
import { RedButton } from '../theme/RedButton'
import {  InputWithoutBorder } from '../theme/Input'
import {
    setPropTypes,
    withState,
    withHandlers,
    compose
} from 'recompose'

const SearchForm = ({
    onFieldChange,
    onSubmit,
    formValues: {searchFirstName,searchLastName}
}) => (
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
                    onChange={onFieldChange}
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
                    onChange={onFieldChange}
                    placeholder='Enter last name' />{' '}
            </FormColumn>
            <FormColumn >
                <RedButton type="submit"
                    onClick={onSubmit}>Search</RedButton>
            </FormColumn>
        </FormRow>
    </Form>
    <hr />
</div >
)
export default compose (
    setPropTypes({
        searchFirstName: PropTypes.string.isRequired,
        searchLastName: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }),
    withState('formValues', 'setformValues', {searchFirstName:'',searchLastName:''}),
    withHandlers({

        onSubmit: ({onSubmit, formValues}) => event => {
            event.preventDefault()
            onSubmit(formValues)
        },
        //Start: validate input control  When its one has changed. But still the variable that has not changed.
        onFieldChange: ({ formValues, setformValues}) => ({target:{ name, value } }) => {
            setformValues({ ...formValues, [name]: value })
        }
        //End: validate input control  When its one has changed. But still the variable that has not changed.
    })
)(SearchForm)

