// import React, { Component } from 'react'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { SearchForm } from '../components'
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    withState,
    withHandlers,
    compose
} from 'recompose'

const SearchFormContainer = ({
    name,
    onSearch
}) => (
        <div>
            {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Warning message</ModalHeader>
                <ModalBody>
                    Please input first name and last name for the search.
        </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal> */}
            <SearchForm
                {...name}
                onSubmit={onSearch} />
        </div >
    )
export default compose(
    withRouter,
    withState('name', 'setName', { searchFirstName: '', searchLastName: '' }),
    withHandlers({
        onSearch: ({ history: { push } }) => (keyword) => {
            const firstName = keyword.searchFirstName
            const lastName = keyword.searchLastName
            if (firstName === "" || lastName === "") {
                alert('Please input first name and last name for search.')
                push('/')
            }
            else {
                push(`/search/?firstName=${firstName}&lastName=${lastName}`)
            }
        }
    })
)(SearchFormContainer)
